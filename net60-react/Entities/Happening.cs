namespace net60_react
{
    public class Happening
    {
        public Guid id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Guid ArtistId { get; set; }
        public Guid SceneId { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
    }
}