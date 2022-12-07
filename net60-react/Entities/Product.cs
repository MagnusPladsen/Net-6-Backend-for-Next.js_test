namespace net60_react
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<Item> Items { get; set; }
        public string Type { get; set; }
    }
}