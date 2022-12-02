using net60_react.Entities;

namespace net60_react.Repositories
{
    public interface TicketsRepository
    {
        Task<Ticket> GetTicketAsync(Guid id);
        Task<IEnumerable<Ticket>> GetTicketsAsync();
        Task CreateTicketAsync(Ticket ticket);
        Task UpdateTicketAsync(Ticket ticket);
        Task DeleteTicketAsync(Guid id);
    }
}