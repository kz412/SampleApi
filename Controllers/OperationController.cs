using Microsoft.AspNetCore.Mvc;
using SampleApi.Infrastructure;

namespace SampleApi.Controllers
{
    [Authorise]
    public class OperationController : ControllerBase
    {
        public IActionResult Foo(string id) => Ok($"Hello world, {id}");

        public IActionResult Add(decimal a, decimal b) => Ok(a + b);

        public IActionResult Subtract(decimal a, decimal b) => Ok(a - b);

        public IActionResult Multiply(decimal a, decimal b) => Ok(a * b);

        public IActionResult Divide(decimal a, decimal b) => Ok(b != 0 ? a / b : (decimal?) null);
    }
}
