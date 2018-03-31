using System.Diagnostics;
using System.Threading.Tasks;

namespace api.Footer
{
    public interface IVersionService
    {
        Task<string> Get();
    }

    internal class VersionService : IVersionService
    {
        public async Task<string> Get()
        {
            var psi = new ProcessStartInfo("git", "rev-parse --short HEAD")
            {
                RedirectStandardOutput = true
            };
            var version = await Process.Start(psi).StandardOutput.ReadToEndAsync();
            return version.Trim();
        }
    }
}
