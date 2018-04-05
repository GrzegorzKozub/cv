using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using api.Settings;
using Microsoft.Extensions.Options;

namespace api.Footer
{
    public interface IFooterService
    {
        Task<string> Get();
    }

    internal class FooterService : IFooterService
    {
        private readonly DataConfig config;
        private readonly IVersionService versionService;

        public FooterService(
            IOptions<DataConfig> config,
            IVersionService versionService)
        {
            this.config = config.Value;
            this.versionService = versionService;
        }

        public async Task<string> Get()
        {
            var footer = await File.ReadAllTextAsync($"{config.Dir}/footer.json");
            var version = await versionService.Get();
            return Patch(footer, version);
        }

        private static string Patch(string footer, string version) =>
            Regex.Replace(footer, "\"version\": \"\"", $"\"version\": \"{version}\"");
    }
}
