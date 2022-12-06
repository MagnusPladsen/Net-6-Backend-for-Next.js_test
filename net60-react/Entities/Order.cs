namespace net60_react
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public CustomerInfo CustomerInfo { get; set; }
        public Product Product { get; set; }
        public DiscountCode? DiscountCode { get; set; }
    }
}