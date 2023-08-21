
namespace GameDevRecipes.API.Utilities
{
    public class YoutubeApiService
    {
        private readonly HttpClient _httpClient;

        private readonly string _apiKey;

        public YoutubeApiService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _apiKey = configuration.GetSection("ApiKey").Value;
            if (_apiKey == string.Empty)
                throw new ArgumentException($"Error in obtaining api key: {_apiKey}");
        }

        //public async Task<YoutubeApiResponse> GetVideoDetailsAsync(string video_id)
        //{

        //}
        
        public class YoutubeApiResponse
        {
            
        }
    }
}
