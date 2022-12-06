using net60_react.Entities;

namespace net60_react.Repositories
{
    public interface EventsRepository
    {
        Task<Event> GetEventAsync(Guid id);
        Task<IEnumerable<Event>> GetEventsAsync();
        Task CreateEventAsync(Event event);
        Task UpdateEventAsync(Event event);
        Task DeleteEventAsync(Guid id);
    }
}