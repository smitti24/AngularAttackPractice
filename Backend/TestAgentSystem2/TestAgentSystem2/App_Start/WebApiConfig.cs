using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestAgentSystem2
{
    using System.Web.Http;

    class WebApiConfig
    {
        public static void Register(HttpConfiguration configuration)
        {
            // Enable cors for the web api ...
            configuration.EnableCors();

            // Set up the default router ...
            configuration.Routes.MapHttpRoute("API Default", "api/{controller}/{id}",
                new { id = RouteParameter.Optional });
        }
    }
}