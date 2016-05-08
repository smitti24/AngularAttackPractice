using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Breeze.WebApi2;
using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Newtonsoft.Json.Linq;
using System.Web.Http;

namespace TestAgentSystem2.Controllers
{
    [BreezeController]
    public class AgentSystemController : ApiController
    {
        readonly EFContextProvider<AgentSystem> _contextProvider = new EFContextProvider<AgentSystem>();

        [HttpGet] public string Metadata() { return _contextProvider.Metadata(); }        
        [HttpGet] public IQueryable<Agent> Agents() { return _contextProvider.Context.Agent; }
        [HttpGet] public IQueryable<AgentLocation> AgentLocations() { return _contextProvider.Context.AgentLocation; }
        [HttpGet] public IQueryable<Coordinate> Coordinates() { return _contextProvider.Context.Coordinate; }
        [HttpGet] public IQueryable<Mission> Missions() { return _contextProvider.Context.Mission; }
        [HttpGet] public IQueryable<Goal> Goals() { return _contextProvider.Context.Goal; }
        [HttpGet] public IQueryable<Message> Messages() { return _contextProvider.Context.Message; }
        [HttpGet] public IQueryable<AgentStatus> AgentStatus() { return _contextProvider.Context.AgentStatus; }
        [HttpGet] public IQueryable<MissionStatus> MissionStatus() { return _contextProvider.Context.MissionStatus; }
        [HttpPost, HttpOptions] public SaveResult SaveChanges(JObject saveBundle) { if (saveBundle != null) { return _contextProvider.SaveChanges(saveBundle); } else { return null; } }
    }
}