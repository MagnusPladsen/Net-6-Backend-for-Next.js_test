namespace net60_react.Repositories
{
    public class InMemOrdersRepository : OrdersRepository
    {
        private readonly List<Order> orders = new()
        {
            new Order {
                OrderId = Guid.NewGuid(),
                CustomerInfo = new CustomerInfo() {
                    CustomerId = Guid.NewGuid(),
                    FirstName = "Ola",
                    LastName = "Normann",
                    Email = "ola@normann.no",
                    PhoneNumber = 99887766,
                    Address = "Ola Nordmannsgate 01",
                    ZipCode = "2612",
                    City = "Lillehammer",
                },
                Products = new List<Product>() {
                    new Product {
                        Id = Guid.NewGuid(),
                        Name = "Ticket-01",
                        Items = new List<Item>() {
                            new Item {
                                Id = Guid.NewGuid(),
                                Name = "Ticket-01",
                                Active = true,
                                Type = "Ticket",
                                Price = new Price() {
                                    Id = Guid.NewGuid(),
                                    PriceNumber = 1500,
                                    Tax = 25,
                                    StartDate = DateTimeOffset.UtcNow,
                                    EndDate = DateTimeOffset.UtcNow,
                                },
                                Unit = "HuskerIkkeHvaUnitVar",
                                BookAbleResource = new BookAbleResource() {
                                    Id = Guid.NewGuid(),
                                    Name = "Ticket Placement",
                                    Type = "Placement",
                                    StartDate = DateTimeOffset.UtcNow,
                                    EndDate = DateTimeOffset.UtcNow,
                                    Bounds = new LatLngBoundsExpression() {
                                        SouthWest = 00,
                                        NorthEast = 00,
                                        NorthWest = 00,
                                        SouthEasth = 00,
                                    },
                                },
                            },
                        },
                        Type = "Standard Billett",
                    },
                },
                DiscountCode = new DiscountCode() {
                    Id = Guid.NewGuid(),
                    Name = "200kr Rabatt",
                    Description = "Epost kampanje for tidligere kunder.",
                    Discount = 200,
                    Code = "24epost200",
                    Type = "Krone rabatt",
                },
            }
        };

        public async Task<Order> GetOrderAsync(Guid id)
        {
            var order = orders.Where(order => order.OrderId == id).SingleOrDefault();
            return await Task.FromResult(order);
        }

        public async Task<IEnumerable<Order>> GetOrdersAsync()
        {
            return await Task.FromResult(orders);
        }

    }
}