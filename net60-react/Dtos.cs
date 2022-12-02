using System.ComponentModel.DataAnnotations;

namespace net60_react.Dtos
{
    public record TicketDto(Guid Id, string Name, string Description, decimal Price, DateTimeOffset CreatedDate);

    public record CreateTicketDto([Required] string Name, string Description, [Range(1, 10000)] decimal Price);

    public record UpdateTicketDto([Required] string Name, string Description, [Range(1, 10000)] decimal Price);
}