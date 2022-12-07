using net60_react.Entities;

namespace net60_react.Repositories
{
    public interface OrdersRepository
    {
        Task<Order> GetOrderAsync(Guid id);
        Task<IEnumerable<Order>> GetOrdersAsync();
        
    }
}