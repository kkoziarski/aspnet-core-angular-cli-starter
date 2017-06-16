namespace AspNetCoreAngularCli.Auth
{
    using System.Collections.Generic;

    using IdentityServer4.Models;

    internal static class Resources
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
                new IdentityResources.Email(),
                new IdentityResource
                {
                    Name = "role",
                    UserClaims = new List<string> {"role"}
                },
                new IdentityResource
                {
                    Name = "dataeventrecordsscope",
                    UserClaims = new[] {
                        "role",
                        "admin",
                        "user",
                        "dataEventRecords",
                        "dataEventRecords.admin",
                        "dataEventRecords.user"
                    }
                } 
            };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource
                {
                    Name = "customAPI",
                    DisplayName = "Custom API",
                    Description = "Custom API Access",
                    UserClaims = new List<string> { "role" },
                    ApiSecrets = new List<Secret> { new Secret("scopeSecret".Sha256())},
                    Scopes = new List<Scope>
                    {
                        new Scope("customAPI.read"),
                        new Scope("customAPI.write")
                    }
                },
                new ApiResource("dataEventRecords")
                {
                    ApiSecrets = new List<Secret>
                    {
                        new Secret("dataEventRecordsSecret".Sha256())
                    },
                    Scopes = new List<Scope>
                    {
                        new Scope
                        {
                            Name = "dataeventrecordsscope",
                            DisplayName = "Scope for the dataEventRecords ApiResource"
                        }
                    },
                    UserClaims = new List<string>
                    {
                        "role",
                        "admin",
                        "user",
                        "dataEventRecords",
                        "dataEventRecords.admin",
                        "dataEventRecords.user"
                    }
                }
            };
        }
    }
}