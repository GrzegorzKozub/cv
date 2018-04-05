using System.Text.RegularExpressions;
using System.Threading.Tasks;
using api.Core;

namespace api.Footer
{
    public interface IFooterService
    {
        Task<string> Get();
    }

    internal class FooterService : IFooterService
    {
        private readonly IDataService dataService;
        private readonly IVersionService versionService;

        public FooterService(
            IDataService dataService,
            IVersionService versionService)
        {
            this.dataService = dataService;
            this.versionService = versionService;
        }

        public async Task<string> Get()
        {
            var footer = await dataService.ReadFile("footer");
            var version = await versionService.Get();
            return Patch(footer, version);
        }

        private static string Patch(string footer, string version) =>
            Regex.Replace(footer, "\"version\": \"\"", $"\"version\": \"{version}\"");
    }
}
