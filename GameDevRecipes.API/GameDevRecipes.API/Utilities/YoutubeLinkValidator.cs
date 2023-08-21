using System.Text.RegularExpressions;

namespace GameDevRecipes.API.Utilities
{
    public class YoutubeLinkValidator
    {
        public static bool ValidateYoutubeLink(string input)
        {
            string youtubePattern = @"^(https?://)?(www\.)?(youtube\.com/watch\?v=|youtu\.be/)([a-zA-Z0-9_-]+)";
            Match match = Regex.Match(input, youtubePattern);
            return match.Success;
        }
    }
}
