
namespace GameDevRecipes.API.Utilities
{
    public class YoutubeApiService
    {
        private readonly HttpClient _httpClient;

        public YoutubeApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        //public async Task<YoutubeApiResponse> GetVideoDetailsAsync(string video_id)
        //{

        //}
        
        public class YoutubeApiResponse
        {

        }
    }
}
