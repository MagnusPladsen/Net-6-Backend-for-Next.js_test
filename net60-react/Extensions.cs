using net60_react.Dtos;
using net60_react.Entities;

namespace net60_react
{
    public static class Extensions
    {
        public static TicketDto AsDto(this Ticket ticket)
        {
            return new TicketDto(ticket.Id, ticket.Name, ticket.Description, ticket.Price, ticket.Icon, ticket.CreatedDate)
            {
                Id = ticket.Id,
                Name = ticket.Name,
                Price = ticket.Price,
                Icon = ticket.Icon,
                CreatedDate = ticket.CreatedDate,
            };
        }
        public static EventDto AsDto(this Event Event) // Går ikke med liten e?? wat
        {
            return new EventDto(Event.Id, Event.Name, Event.Description, Event.Image, Event.Logo, Event.Dates, Event.Products, Event.EventLocationInfo, Event.EventContactInfo, Event.Program, Event.Rules)
            {
                Id = Event.Id,
                Name = Event.Name,
                Description = Event.Description,
                Image = Event.Image,
                Logo = Event.Logo,
                Dates = Event.Dates,
                Products = Event.Products,
                EventLocationInfo = Event.EventLocationInfo,
                EventContactInfo = Event.EventContactInfo,
                Program = Event.Program, 
                Rules = Event.Rules,

            };
        }

        public static OrderDto AsDto(this Order order)
        {
            return new OrderDto(order.OrderId, order.CustomerInfo, order.Products, order.DiscountCode)
            {
                OrderId = order.OrderId,
                CustomerInfo = order.CustomerInfo,
                Products = order.Products,
                DiscountCode = order.DiscountCode,
            };
        }
    }
}