using GameDevRecipes.API.Data;
using GameDevRecipes.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;
using System.Linq;
using GameDevRecipes.API.Utilities;

namespace GameDevRecipes.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class VideosController : Controller
    {
        private readonly GameDevRecipesDbContext _gameDevRecipesDbContext;
        private readonly YoutubeApiService _youtubeApiService;
        public VideosController(GameDevRecipesDbContext gameDevrecipesDbContext, YoutubeApiService youtubeApiService)
        {
            this._gameDevRecipesDbContext = gameDevrecipesDbContext;
            this._youtubeApiService = youtubeApiService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllVideos()
        {
            var videos = await _gameDevRecipesDbContext.Videos.ToListAsync();
            return Ok(videos);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetVideo(Guid id)
        {
            var video = await _gameDevRecipesDbContext.Videos.FindAsync(id);
            if (video == null)
                return NotFound();
            return Ok(video);
        }

        [HttpGet("{tag}")]
        public async Task<IActionResult> getTaggedVideos(string tag)
        {
            var allVideos = await _gameDevRecipesDbContext.Videos.ToListAsync();

            var videosWithTag = allVideos.Where(video => TagProcessor.FindTag(video.Tags, tag));

            return Ok(videosWithTag);
        }

        [HttpPost]
        public async Task<IActionResult> AddVideo([FromBody] Video video)
        {
            // Check if video received matches regex pattern
            if (!YoutubeLinkValidator.ValidateYoutubeLink(video.VideoId))
                return BadRequest("Invalid Youtube Link");

            // Process the link with youtube api utility helper
            var newVideo = await _youtubeApiService.GetVideoDetailsAsync(video.VideoId);
            if (newVideo == null)
                return BadRequest("Error with fetching video using Youtube API");

            newVideo.Id = Guid.NewGuid(); // Generate new ID for video
            // Reassignment -_-
            newVideo.VideoId = video.VideoId; 
            newVideo.GameEngine = video.GameEngine;
            newVideo.TagsAsString = video.TagsAsString; // ** Change this line later in future so that we can process the number of tags in a string and only return MAX tags
      
            // Save video into db 
            await _gameDevRecipesDbContext.AddAsync(newVideo);
            await _gameDevRecipesDbContext.SaveChangesAsync();
            return Ok(newVideo);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateVideo([FromRoute] Guid id, Video updateVideoRequest)
        {
            var video = await _gameDevRecipesDbContext.Videos.FindAsync(id);
            if (video == null)
                return NotFound();

            if (!YoutubeLinkValidator.ValidateYoutubeLink(updateVideoRequest.VideoId))
                return BadRequest("Invalid Youtube Link");

            // Process the link with youtube api
            Video newVideo = await _youtubeApiService.GetVideoDetailsAsync(updateVideoRequest.VideoId);
            if (newVideo == null)
                return BadRequest("Error with fetching video using Youtube API");
            updateVideoRequest.Name = newVideo.Name;
            updateVideoRequest.ThumbnailLink = newVideo.ThumbnailLink;
            updateVideoRequest.Description = newVideo.Description;

            video.Name = updateVideoRequest.Name;
            video.Description = updateVideoRequest.Description;
            video.GameEngine = updateVideoRequest.GameEngine;
            video.ThumbnailLink = updateVideoRequest.ThumbnailLink;
            video.VideoId = updateVideoRequest.VideoId;
            video.TagsAsString = updateVideoRequest.TagsAsString;
            await _gameDevRecipesDbContext.SaveChangesAsync();
            return Ok(video);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteVideo(Guid id)
        {
            var video = await _gameDevRecipesDbContext.Videos.FindAsync(id);
            if (video == null)
                return NotFound();
            _gameDevRecipesDbContext.Remove(video);
            await _gameDevRecipesDbContext.SaveChangesAsync();
            return Ok(video); 
        }
    }
}
