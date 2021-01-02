using Microsoft.AspNetCore.Mvc;
using SampleApi.Services;

namespace mini_umb.Controllers
{
    public class OperationController : ControllerBase
    {
        private readonly IOperationsService _operationsService;

        public OperationController()
        {
            _operationsService = new OperationsService();
        }

        public IActionResult Add(decimal a, decimal b)
        {
            return Ok(_operationsService.Add(a, b));
        }
    }
}
