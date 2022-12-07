namespace net60_react
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public CustomerInfo CustomerInfo { get; set; }
        public List<Product> Products { get; set; }
        public DiscountCode? DiscountCode { get; set; } = null;
    }
}