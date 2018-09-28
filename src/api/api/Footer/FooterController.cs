using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Footer
{
    [Route("footer")]
    [ApiController]
    public class FooterController : ControllerBase
    {
        private readonly IFooterService service;

        public FooterController(IFooterService service) =>
            this.service = service;

        [HttpGet]
        public async Task<ContentResult> Get() =>
            Content(await service.Get(), "application/json");
    }
}
