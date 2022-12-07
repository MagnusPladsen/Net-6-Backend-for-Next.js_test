namespace net60_react
{
    public class Place
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<LatLngBoundsExpression> Bounds { get; set; }
    }
}