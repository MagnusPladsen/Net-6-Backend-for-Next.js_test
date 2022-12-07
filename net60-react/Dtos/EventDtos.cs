using System.ComponentModel.DataAnnotations;

namespace net60_react.Dtos
{
    public record EventDto(Guid Id, string Name, string Description, string Image, string Logo, Dates Dates, List<Product> Products, EventLocationInfo EventLocationInfo, EventContactInfo EventContactInfo, Program Program, List<Rule> Rules);

    public record UpdateEventDto(string? Name, string? Description, string? Image, string? Logo);

    public record UpdateEventDatesDto(DateTimeOffset StartDate, DateTimeOffset EndDate);

    public record UpdateEventLocationInfoDto(string? Address, string? ZipCode, string? City, string? Country);

    public record UpdateEventContactInfoDto(string? Email, string? PhoneNumber, string? Website);

}