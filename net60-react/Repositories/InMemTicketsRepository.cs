using net60_react.Entities;

namespace net60_react.Repositories
{
    public class InMemTicketsRepository : TicketsRepository
    {
        private readonly List<Ticket> tickets = new()
        {

            new Ticket{
                Id = Guid.NewGuid(), Name = "Tilskuer", Price = 1500, Description = "Tilskuer", Icon = "/images/icons/ticketIcon.svg", CreatedDate = DateTimeOffset.UtcNow
            },
            new Ticket{
                Id = Guid.NewGuid(), Name = "Tilskuer PREMIUM", Price = 2000, Description = "Tilskuer med PREMIUM plasssering", Icon = "/images/icons/ticketIcon.svg", CreatedDate = DateTimeOffset.UtcNow
            },
            new Ticket{
                Id = Guid.NewGuid(), Name = "Camping", Price = 2500, Description = "Campingplass", Icon = "/images/icons/campingIcon.svg", CreatedDate = DateTimeOffset.UtcNow
            },
            new Ticket{
                Id = Guid.NewGuid(), Name = "Camping med strøm", Price = 3000, Description = "Campingplass med strøm", Icon = "/images/icons/campingIcon.svg", CreatedDate = DateTimeOffset.UtcNow
            },
        };

        public async Task<IEnumerable<Ticket>> GetTicketsAsync()
        {
            return await Task.FromResult(tickets);
        }

        public async Task<Ticket> GetTicketAsync(Guid id)
        {
            var ticket = tickets.Where(ticket => ticket.Id == id).SingleOrDefault();
            return await Task.FromResult(ticket);
        }

        public async Task CreateTicketAsync(Ticket ticket)
        {
            tickets.Add(ticket);
            await Task.CompletedTask;
        }

        public async Task UpdateTicketAsync (Ticket ticket)
        {
            var index = tickets.FindIndex(existingTicket => existingTicket.Id == ticket.Id);
            tickets[index] = ticket;
            await Task.CompletedTask;
        }

        public async Task DeleteTicketAsync(Guid id)
        {
            var index = tickets.FindIndex(existingTicket => existingTicket.Id == id);
            tickets.RemoveAt(index);
            await Task.CompletedTask;
        }
    }
}