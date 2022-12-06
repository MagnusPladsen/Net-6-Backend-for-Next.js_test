namespace net60_react.Entities
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string? Logo { get; set; }
        public Dates Dates { get; set; }
        public Product Product { get; set; }
        public EventLocationInfo EventLocationInfo { get; set; }
        public EventContactInfo EventContactInfo { get; set; }
        public Program Program { get; set; }
        public object Rules { get; set; }    // Hvordan få "{[key: string] string }" ??
    }
}