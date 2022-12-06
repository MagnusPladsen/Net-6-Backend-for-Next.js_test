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
    }
}