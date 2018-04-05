using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace api.Core
{
    public interface IDataService
    {
        Task<string> ReadFile(string name);
    }

    internal class DataService : IDataService
    {
        private readonly DataConfig config;

        public DataService(IOptions<DataConfig> config) =>
            this.config = config.Value;

        public Task<string> ReadFile(string name) =>
            File.ReadAllTextAsync($"{config.Dir}/{name}.json");
    }
}
