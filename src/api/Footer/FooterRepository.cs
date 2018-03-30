using System.IO;
using System.Threading.Tasks;
using api.Settings;
using Microsoft.Extensions.Options;

namespace api.Footer
{
    public interface IFooterRepository
    {
        Task<string> Get();
    }

    internal class FooterRepository : IFooterRepository
    {
        private readonly DataConfig config;

        public FooterRepository(IOptions<DataConfig> config) =>
            this.config = config.Value;

        public Task<string> Get() =>
            File.ReadAllTextAsync(config.FooterPath);
    }
}
