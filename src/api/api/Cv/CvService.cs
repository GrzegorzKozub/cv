using System.Threading.Tasks;
using api.Core;

namespace api.Cv
{
    public interface ICvService
    {
        Task<string> Get();
    }

    internal class CvService : ICvService
    {
        private readonly IDataService dataService;

        public CvService(IDataService dataService) =>
            this.dataService = dataService;

        public Task<string> Get() => dataService.ReadFile("cv");
    }
}
