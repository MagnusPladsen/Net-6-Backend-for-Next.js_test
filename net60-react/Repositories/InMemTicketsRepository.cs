using net60_react.Entities;

namespace net60_react.Repositories
{
    public class InMemTicketsRepository : TicketsRepository
    {
        private readonly List<Ticket> tickets = new()
        {

            new Ticket{
                Id = Guid.NewGuid(), Name = "Ticket-01", Price = 1500, Description = "Tilskuer", CreatedDate = DateTimeOffset.UtcNow
            },
            new Ticket{
                Id = Guid.NewGuid(), Name = "Ticket-02", Price = 2000, Description = "Tilskuer med VIP plass", CreatedDate = DateTimeOffset.UtcNow
            },
            new Ticket{
                Id = Guid.NewGuid(), Name = "Ticket-03", Price = 2500, Description = "Campingplass", CreatedDate = DateTimeOffset.UtcNow
            },
            new Ticket{
                Id = Guid.NewGuid(), Name = "Ticket-04", Price = 3000, Description = "Campingplass med strøm", CreatedDate = DateTimeOffset.UtcNow
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