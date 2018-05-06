using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Footer
{
    [Route("footer")]
    public class FooterController : Controller
    {
        private readonly IFooterService service;

        public FooterController(IFooterService service) =>
            this.service = service;

        [HttpGet]
        public async Task<ContentResult> Get() =>
            Content(await service.Get(), "application/json");
    }
}
