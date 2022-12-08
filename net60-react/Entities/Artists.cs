namespace net60_react
{
    public class Artist
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; }
        public string? Image { get; set; }
    }
}