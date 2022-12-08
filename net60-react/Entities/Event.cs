namespace net60_react.Entities
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Logo { get; set; }
        public Dates Dates { get; set; }
        public List<Product> Products { get; set; }
        public EventLocationInfo EventLocationInfo { get; set; }
        public EventContactInfo EventContactInfo { get; set; }
        public Program Program { get; set; }

        public List<Placement> Placements { get; set; }
        public List<Rule> Rules { get; set; }
    }
}