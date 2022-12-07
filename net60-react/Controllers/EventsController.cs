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

        // GET /events/id
        [HttpGet("{id}")]
        public async Task<ActionResult<EventDto>> GetEventAsync(Guid id)
        {
            var Event = await repository.GetEventAsync(id);

            if (Event is null)
            {
                return NotFound();
            }

            return Event.AsDto();
        }

        // PUT /events/id
        // Update the main properties for the event (Name, Description, Image & Logo)
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateEventAsync(Guid id, UpdateEventDto eventDto)
        {
            var existingEvent = await repository.GetEventAsync(id);

            if (existingEvent is null)
            {
                return NotFound();
            }

            if (eventDto.Name is not null)
            {
                existingEvent.Name = eventDto.Name;
            }

            if (eventDto.Description is not null)
            {
                existingEvent.Description = eventDto.Description;
            }

            if (eventDto.Image is not null)
            {
                existingEvent.Image = eventDto.Image;
            }
            
            if (eventDto.Logo is not null)
            {
            existingEvent.Logo = eventDto.Logo;
            }

            await repository.UpdateEventAsync(existingEvent);

            return NoContent();
        }


        // PUT /events/id/dates
        // Update the dates for the event (StartDate & EndDate)
        [HttpPut]
        [Route("/events/{id}/dates")]
        public async Task<ActionResult> UpdateEventDatesAsync(Guid id, UpdateEventDatesDto eventDto)
        {
            var existingEvent = await repository.GetEventAsync(id);

            if (existingEvent is null)
            {
                return NotFound();
            }

            existingEvent.Dates.StartDate = eventDto.StartDate;
            existingEvent.Dates.EndDate = eventDto.EndDate;

            await repository.UpdateEventDatesAsync(existingEvent);

            return NoContent();

        }
    }
}