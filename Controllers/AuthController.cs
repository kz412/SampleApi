using Microsoft.AspNetCore.Mvc;
using mini_umb.Model;
using mini_umb.Services;

namespace mini_umb.Controllers
{
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] AuthenticateRequest request)
        {
            var response = _userService.Authenticate(request);
            if (response == null)
                return Unauthorized();

            return Ok(response);
        }
    }
}

    
