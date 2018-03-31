using System.IO;
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

        public FooterService(IOptions<DataConfig> config) =>
            this.config = config.Value;

        public Task<string> Get() =>
            File.ReadAllTextAsync(config.FooterPath);
    }
}
