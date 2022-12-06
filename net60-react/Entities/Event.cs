namespace net60_react.Entities
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Logo { get; set; }
        public object Rules { get; set; }
        public Ticket ticket { get; set; }     // hvordan fungerer det å chaine enities/ types?

    }
}