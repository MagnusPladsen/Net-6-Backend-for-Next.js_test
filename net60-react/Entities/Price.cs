namespace net60_react
{
    public class Price
    {
        public Guid Id { get; set; }
        public int PriceNumber { get; set; }
        public int Tax { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
    }
}