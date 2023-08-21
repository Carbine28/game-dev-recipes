using GameDevRecipes.API.Models;
using Google.Apis.Services;
using Google.Apis.YouTube.v3;

/*
 * Wrapper class For Googles' Youtube Data api
 * Requires API key from 
 */

namespace GameDevRecipes.API.Utilities
{
    public class YoutubeApiService
    {
        private readonly string _apiKey;
        private readonly YouTubeService _youtubeService;
        public YoutubeApiService(IConfiguration configuration)
        {
            _apiKey = configuration.GetSection("ApiKey").Value;
            if (_apiKey == string.Empty)
                throw new ArgumentException($"Error in obtaining api key: {_apiKey}");

            _youtubeService = new YouTubeService(new BaseClientService.Initializer()
            {
                ApiKey = _apiKey
            });
        }

        public async Task<Video> GetVideoDetailsAsync(string video_id)
        {
            Video retrievedVideo = new Video();

            var videoRequest =  _youtubeService.Videos.List("snippet");
            videoRequest.Id = TrimLinkToID(video_id);
            try
            {
                var videoResponse = await videoRequest.ExecuteAsync();
                // Data
                var snippet = videoResponse.Items[0].Snippet;

                retrievedVideo.Name = snippet.Title;
                retrievedVideo.Description = snippet.Description;
                retrievedVideo.ThumbnailLink = snippet.Thumbnails.Default__.Url;

                return retrievedVideo;
            }
            catch
            {
                return null;
            }
        }

        // Parse the Youtube URL and return the absolute path , trimmed.
        // i.e (h)ttps://youtu.be/ABCDEFG
        // Returns ABCDEFG
        public static string TrimLinkToID(string link)
        {
            if (YoutubeLinkValidator.ValidateYoutubeLink(link))
            {
                Uri uri = new Uri(link);
                string absPath = uri.AbsolutePath;
                return absPath.TrimStart('/');
            }
            else
                return string.Empty;
        }
    }
}

