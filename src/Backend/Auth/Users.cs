namespace AspNetCoreAngularCli.Auth
{
    using System.Collections.Generic;
    using System.Security.Claims;

    using IdentityModel;

    using IdentityServer4.Test;

    internal static class Users
    {
        public static List<TestUser> Get()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "F687BB68-034A-464A-9ED1-61254BE03D02",
                    Username = "kris",
                    Password = "password",
                    Claims = new List<Claim>
                    {
                        new Claim(JwtClaimTypes.Email, "test@example.com"),
                        new Claim(JwtClaimTypes.Role, "admin")
                    }
                }
            };
        }
    }
}