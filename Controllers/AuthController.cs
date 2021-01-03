using Microsoft.AspNetCore.Mvc;
using mini_umb.Model;
using SampleApi.Services;

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
            var authResult = _userService.Authenticate(request.Username, request.Password);
            if (authResult == null)
                return Unauthorized();

            return Ok(new AuthenticateResponse {Token = authResult.Value.Token});
        }
    }
}

    
