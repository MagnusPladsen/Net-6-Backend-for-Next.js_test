using System.ComponentModel.DataAnnotations;

namespace net60_react.Dtos
{
    public record OrderDto(Guid OrderId, CustomerInfo CustomerInfo, List<Product> Products, DiscountCode DiscountCode);
}