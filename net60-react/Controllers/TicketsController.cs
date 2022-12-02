using System.Collections;
using Microsoft.AspNetCore.Mvc;
using net60_react.Dtos;
using net60_react.Entities;
using net60_react.Repositories;

namespace net60_react.Controllers
{
    [ApiController]
    [Route("tickets")]
    public class TicketsController : ControllerBase // Hvorfor controllerbase??
    {
        private readonly TicketsRepository repository;
        private readonly ILogger<TicketsController> logger;
        public TicketsController(TicketsRepository repository, ILogger<TicketsController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        // GET /tickets
        [HttpGet]
        public async Task<IEnumerable<TicketDto>> GetTicketsAsync(string? name = null)
        {
            var tickets = (await repository.GetTicketsAsync()).Select(ticket => ticket.AsDto());

            if (!string.IsNullOrWhiteSpace(name))
            {
                tickets = tickets.Where(ticket => ticket.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
            }

            return tickets;
        }

        // GET /tickets/id
        [HttpGet("{id}")]
        public async Task<ActionResult<TicketDto>> GetTicketAsync(Guid id)
        {
            var ticket = await repository.GetTicketAsync(id);

            if (ticket is null)
            {
                return NotFound();
            }

            return ticket.AsDto();
        }


        // POST /tickets
        [HttpPost]
        public async Task<ActionResult<TicketDto>> CreateticketAsync(CreateTicketDto ticketDto)
        {
            Ticket ticket = new()
            {
                Id = Guid.NewGuid(),
                Name = ticketDto.Name,
                Description = ticketDto.Description,
                Price = ticketDto.Price,
                CreatedDate = DateTimeOffset.UtcNow
            };

            await repository.CreateTicketAsync(ticket);

            return CreatedAtAction(nameof(GetTicketAsync), new { id = ticket.Id }, ticket.AsDto());
        }


        // PUT /tickets/id
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateticketAsync(Guid id, UpdateTicketDto ticketDto)
        {
            var existingticket = await repository.GetTicketAsync(id);

            if (existingticket is null)
            {
                return NotFound();
            }

            existingticket.Name = ticketDto.Name;
            existingticket.Price = ticketDto.Price;

            await repository.UpdateTicketAsync(existingticket);

            return NoContent();
        }


        // DELETE /tickets/id
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteticketAsync(Guid id)
        {
            var existingticket = await repository.GetTicketAsync(id);

            if (existingticket is null)
            {
                return NotFound();
            }

            await repository.DeleteTicketAsync(id);

            return NoContent();

        }
    }
}