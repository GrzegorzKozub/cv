using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Cv
{
    [Route("cv")]
    [ApiController]
    public class CvController : ControllerBase
    {
        private readonly ICvService service;

        public CvController(ICvService service) =>
            this.service = service;

        [HttpGet]
        public async Task<ContentResult> Get() =>
            Content(await service.Get().ConfigureAwait(false), "application/json");
    }
}
