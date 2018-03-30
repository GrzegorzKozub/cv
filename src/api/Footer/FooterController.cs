using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Footer
{
    [Route("footer")]
    public class FooterController : Controller
    {
        private readonly IFooterRepository repository;

        public FooterController(IFooterRepository repository) =>
            this.repository = repository;

        [HttpGet]
        public async Task<ContentResult> Get() =>
            Content(await repository.Get(), "application/json");
    }
}
