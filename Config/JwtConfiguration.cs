namespace SampleApi.Config
{
    public class JwtConfiguration
    {
        // TODO should come from appSettings or use x509 cert.
        public string Secret => "SECRETKEYABCDEFG1234";
    }
}
