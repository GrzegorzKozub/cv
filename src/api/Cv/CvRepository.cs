using System.IO;
using System.Threading.Tasks;
using api.Settings;
using Microsoft.Extensions.Options;

namespace api.Cv
{
    public interface ICvRepository
    {
        Task<string> Get();
    }

    internal class CvRepository : ICvRepository
    {
        private readonly DataConfig config;

        public CvRepository(IOptions<DataConfig> config) =>
            this.config = config.Value;

        public Task<string> Get() =>
            File.ReadAllTextAsync(config.CvPath);
    }
}
