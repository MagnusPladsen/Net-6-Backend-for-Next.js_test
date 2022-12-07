using net60_react.Entities;

namespace net60_react.Repositories
{
    public interface EventsRepository
    {
        Task<IEnumerable<Event>> GetEventsAsync();
        Task<Event> GetEventAsync(Guid id);
        Task DeleteEventAsync(Guid id);
        Task UpdateEventAsync(Event Event);
        Task UpdateEventDatesAsync(Event Event);
    }
}