using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Cv
{
    [Route("cv")]
    public class CvController : Controller
    {
        private readonly ICvRepository repository;

        public CvController(ICvRepository repository) =>
            this.repository = repository;

        [HttpGet]
        public async Task<ContentResult> Get() =>
            Content(await repository.Get(), "application/json");
    }
}
