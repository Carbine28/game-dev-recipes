using System.IO;

namespace GameDevRecipes.API.Utilities
{
    public class ApiKeyReader
    {
        public static string ReadApiFromFile(string path)
        {
            try
            {
                return File.ReadAllText(path).Trim();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error reading API key: {ex.Message}");
                return string.Empty;
            }
        }
    }
}
