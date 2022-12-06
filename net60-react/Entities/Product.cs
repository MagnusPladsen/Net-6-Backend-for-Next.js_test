namespace net60_react
{
    public class Product
    {
        public Guid id { get; set; }
        public string Name { get; set; }
        public Item Item { get; set; }
        public string Type { get; set; }
    }
}