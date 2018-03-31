using System.IO;
using System.Threading.Tasks;
using api.Settings;
using Microsoft.Extensions.Options;

namespace api.Cv
{
    public interface ICvService
    {
        Task<string> Get();
    }

    internal class CvService : ICvService
    {
        private readonly DataConfig config;

        public CvService(IOptions<DataConfig> config) =>
            this.config = config.Value;

        public Task<string> Get() =>
            File.ReadAllTextAsync(config.CvPath);
    }
}
