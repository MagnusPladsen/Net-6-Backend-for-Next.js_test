namespace net60_react
{
    public class Placement
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<LatLngBoundsExpression> Bounds { get; set; }
    }
}