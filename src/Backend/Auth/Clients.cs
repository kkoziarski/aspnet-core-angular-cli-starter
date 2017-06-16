namespace AspNetCoreAngularCli.Auth
{
    using System.Collections.Generic;

    using IdentityServer4.Models;

    internal static class Clients
    {
        public static string HOST_URL = "http://localhost:5002";

        public static IEnumerable<Client> Get()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "oauthClient",
                    ClientName = "Example Client Credentials Client Application",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets = new List<Secret> { new Secret("superSecretPassword".Sha256()) },
                    AllowedScopes = new List<string> {"customAPI.read"}
                },
                new Client
                {
                    ClientName = "angularclient",
                    ClientId = "angularclient",
                    AccessTokenType = AccessTokenType.Reference,
                    //AccessTokenLifetime = 600, // 10 minutes, default 60 minutes
                    AllowedGrantTypes = GrantTypes.Implicit,
                    //RequireConsent = false,
                    AllowAccessTokensViaBrowser = true,
                    RedirectUris = new List<string> { HOST_URL },
                    PostLogoutRedirectUris = new List<string> { HOST_URL },
                    AllowedCorsOrigins = new List<string> { HOST_URL },
                    AllowedScopes = new List<string>
                    {
                        "openid",
                        "dataEventRecords",
                        "dataeventrecordsscope",
                        "securedFiles",
                        "securedfilesscope",
                        "role"
                    }
                }
            };
        }
    }
}