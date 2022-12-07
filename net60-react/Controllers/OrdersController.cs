using Microsoft.AspNetCore.Mvc;
using net60_react.Dtos;
using net60_react.Repositories;
using net60_react.Entities;

namespace net60_react.Controllers
{
    [ApiController]
    [Route("orders")]
    public class OrdersController : ControllerBase
    {
        private readonly OrdersRepository repository;
        private readonly ILogger<OrdersController> logger;
        public OrdersController(OrdersRepository repository, ILogger<OrdersController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        // GET /orders
        [HttpGet]
        public async Task<IEnumerable<OrderDto>> GetOrdersAsync()
        {
            var orders = (await repository.GetOrdersAsync()).Select(order => order.AsDto());

            return orders;
        }

        [HttpGet("{id}")]
        // GET /orders{id}
        public async Task<ActionResult<OrderDto>> GetOrderAsync(Guid id)
        {
            var order = await repository.GetOrderAsync(id);

            if (order is null)
            {
                return NotFound();
            }

            return order.AsDto();
        }
    }
}