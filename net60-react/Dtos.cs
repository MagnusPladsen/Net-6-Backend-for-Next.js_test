using System.ComponentModel.DataAnnotations;

namespace net60_react.Dtos
{
    public record TicketDto(Guid Id, string Name, string Description, decimal Price, string Icon, DateTimeOffset CreatedDate);

    public record CreateTicketDto([Required] string Name, string Description, string Icon, [Range(1, 10000)] decimal Price);

    public record UpdateTicketDto([Required] string Name, string Description, string Icon, [Range(1, 10000)] decimal Price);

    public record EventDto(Guid Id, string Name, string Description, string Image, string Logo, Dates Dates, List<Product> Products, EventLocationInfo EventLocationInfo, EventContactInfo EventContactInfo, Program Program, List<Rule> Rules);

    public record UpdateEventDto(string? Name, string? Description, string? Image, string? Logo);

    public record UpdateEventDatesDto(DateTimeOffset StartDate, DateTimeOffset EndDate);

    public record OrderDto(Guid OrderId, CustomerInfo CustomerInfo, List<Product> Products, DiscountCode DiscountCode);
}