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
                    SubjectId = "4E8300BE-4728-4DC0-9E53-25EC6B650438",
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