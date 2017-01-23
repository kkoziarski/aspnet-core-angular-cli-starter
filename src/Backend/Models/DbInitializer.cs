namespace AspNetCoreAngularCli.Backend.Models
{
    using System.Linq;
    using AspNetCoreAngularCli.Backend.Data;

    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any heroes.
            if (context.Heroes.Any())
            {
                return;   // DB has been seeded
            }

            var heroes = new Hero[]
            {
                new Hero { Name = "Mr. Nice" }, //, Description = "Mr. Nice desc" },
                new Hero { Name = "Narco" }, //, Description = "Narco desc" },
                new Hero { Name = "Bombasto" }, //, Description = "Bombasto desc" },
                new Hero { Name = "Celeritas" }, //, Description = "Celeritas desc" },
                new Hero { Name = "Magneta" }, //, Description = "Magneta desc" },
                new Hero { Name = "RubberMan" }, //, Description = "RubberMan desc" },
                new Hero { Name = "Dynama" }, //, Description = "Dynama desc" },
                new Hero { Name = "Dr IQ" }, //, Description = "Dr IQ desc" },
                new Hero { Name = "Magma" }, //, Description = "Magma desc" },
                new Hero { Name = "Tornado" }, //, Description = "Tornado desc" }
            };

            foreach (Hero hero in heroes)
            {
                context.Heroes.Add(hero);
            }

            context.SaveChanges();
        }
    }
}