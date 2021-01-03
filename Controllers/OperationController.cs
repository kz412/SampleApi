using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SampleApi.Services;

namespace mini_umb.Controllers
{
    [Authorize]
    public class OperationController : ControllerBase
    {
        private readonly IOperationsService _operationsService;

        public OperationController(IOperationsService operationsService)
        {
            _operationsService = operationsService;
        }

        public IActionResult Foo(string id) => Ok($"Hello world, {id}");

        public IActionResult Add(decimal a, decimal b) => Ok(_operationsService.Add(a, b));

        public IActionResult Subtract(decimal a, decimal b) => Ok(_operationsService.Subtract(a, b));

        public IActionResult Multiply(decimal a, decimal b) => Ok(_operationsService.Multiply(a, b));

        public IActionResult Divide(decimal a, decimal b) => Ok(_operationsService.Divide(a, b));
    }
}
