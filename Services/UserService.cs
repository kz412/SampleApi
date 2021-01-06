using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.IdentityModel.Tokens;
using mini_umb.Config;
using mini_umb.Model;

namespace mini_umb.Services
{
    public interface IUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest request);
        User Get(string username);
    }

    public class UserService : IUserService
    {
        private readonly JwtConfiguration _configuration;
        private static readonly User[] Users = new[]
        {
            new User
            {
                Username = "test",
                Password = "test",
                Claims = new[] {"calculator"}
            }
        };

        public UserService(JwtConfiguration configuration)
        {
            _configuration = configuration;
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest request)
        {
            var user = Users.SingleOrDefault(u => u.Username == request.Username && u.Password == request.Password);
            if (user == null)
                return null;

            var token = GenerateJwtToken(user);

            return new AuthenticateResponse
            {
                Token = token
            };
        }

        public User Get(string username)
        {
            return Users.FirstOrDefault(user => user.Username == username);
        }

        private string GenerateJwtToken(User user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Username)}),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
