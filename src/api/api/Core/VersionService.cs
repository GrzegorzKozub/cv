using System.IO;
using System.Threading.Tasks;

namespace api.Core
{
    public interface IVersionService
    {
        Task<string> Get();
    }

    internal class VersionService : IVersionService
    {
        public async Task<string> Get()
        {
            try
            {
                var version = await File.ReadAllTextAsync("version.txt").ConfigureAwait(false);
                return version.Trim();
            }
            catch
            {
                return await Task.FromResult(string.Empty).ConfigureAwait(false);
            }
        }
    }
}
