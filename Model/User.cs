using System;

namespace mini_umb.Model
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string[] Claims { get; set; } = Array.Empty<string>();
    }
}
