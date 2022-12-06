namespace net60_react
{
    public class BookAbleResource
    {
        public Guid id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
        public LatLngBoundsExpression Bounds { get; set; }
    }
}