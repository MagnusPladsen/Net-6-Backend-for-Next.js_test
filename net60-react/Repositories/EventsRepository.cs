using net60_react.Entities;

namespace net60_react.Repositories
{
    public interface EventsRepository
    {
        Task<IEnumerable<Event>> GetEventsAsync();
        Task DeleteEventAsync(Guid id);
    }
}