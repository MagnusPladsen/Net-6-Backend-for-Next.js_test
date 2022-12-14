using System.ComponentModel.DataAnnotations;

namespace net60_react.Dtos
{
    public record TicketDto(Guid Id, string Name, string Description, decimal Price, string Icon, DateTimeOffset CreatedDate);

    public record CreateTicketDto([Required] string Name, string Description, string Icon, [Range(1, 10000)] decimal Price);

    public record UpdateTicketDto(string? Name, string? Description, string? Icon, [Range(1, 10000)] decimal? Price);
}