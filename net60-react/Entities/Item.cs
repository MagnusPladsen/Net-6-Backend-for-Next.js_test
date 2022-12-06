namespace net60_react
{
    public class Item
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Boolean Active { get; set; }
        public Price Price { get; set; }
        public string Type { get; set; }
        public string Unit { get; set; }
        public BookAbleResource? BookAbleResource { get; set; }
    }
}