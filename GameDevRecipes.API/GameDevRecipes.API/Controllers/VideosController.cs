using GameDevRecipes.API.Data;
using GameDevRecipes.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http.Headers;

namespace GameDevRecipes.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class VideosController : Controller
    {
        private readonly GameDevRecipesDbContext _gameDevRecipesDbContext;
        public VideosController(GameDevRecipesDbContext gameDevrecipesDbContext)
        {
            this._gameDevRecipesDbContext = gameDevrecipesDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllVideos()
        {
            var videos = await _gameDevRecipesDbContext.Videos.ToListAsync();
            return Ok(videos);
        }

        [HttpGet]
        [Route("{d:Guid}")]
        public async Task<IActionResult> GetVideo(Guid id)
        {
            var video = await _gameDevRecipesDbContext.Videos.FindAsync(id);
            if (video == null)
                return NotFound();
            return Ok(video);
        }

        [HttpPost]
        public async Task<IActionResult> AddVideo([FromBody] Video video)
        {
            video.Id = Guid.NewGuid();
            await _gameDevRecipesDbContext.AddAsync(video);
            await _gameDevRecipesDbContext.SaveChangesAsync();
            return Ok(video);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateVideo([FromRoute] Guid id, Video updateVideoRequest)
        {
            var video = await _gameDevRecipesDbContext.Videos.FindAsync(id);

            if (video == null)
                return NotFound();
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
