using System.Collections;
using Microsoft.AspNetCore.Mvc;
using net60_react.Dtos;
using net60_react.Entities;
using net60_react.Repositories;

namespace net60_react.Controllers
{
    [ApiController]
    [Route("events")]
    public class EventsController : ControllerBase // Hvorfor controllerbase??
    {
        private readonly EventsRepository repository;
        private readonly ILogger<EventsController> logger;
        public EventsController(EventsRepository repository, ILogger<EventsController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        // GET /events
        [HttpGet]
        public async Task<IEnumerable<EventDto>> GetEventsAsync()
        {
            var events = (await repository.GetEventsAsync()).Select(Event => Event.AsDto());

            return events;
        }
    }
}