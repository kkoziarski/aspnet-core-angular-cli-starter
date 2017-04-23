namespace AspNetCoreAngularCli.Backend.Controllers
{
    using System.Collections.Generic;

    using AspNetCoreAngularCli.Options;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly AppOptions appOptions;

        public ValuesController(IOptions<AppOptions> appOptions)
        {
            this.appOptions = appOptions.Value;
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2", this.appOptions.Option1, this.appOptions.Option2.ToString() };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
