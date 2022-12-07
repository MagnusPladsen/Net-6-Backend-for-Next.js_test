using net60_react.Entities;

namespace net60_react.Repositories
{
    public class InMemEventsRepository : EventsRepository
    {
        private readonly List<Event> events = new()
        {

            new Event {
                Id = Guid.NewGuid(),
                Name = "Vinstra Country Festival 2024",
                Description = "Vintra Country Festival 2024",
                Image = "/images/hero.jpeg",
                Logo = "/images/vinstraFestival.png",
                Dates = new Dates() {
                    StartDate = DateTimeOffset.UtcNow,
                    EndDate = DateTimeOffset.UtcNow
                },
                Products = new List<Product>() {
                    new Product {
                        Id = Guid.NewGuid(),
                        Name = "Ticket-01",
                        Items = new List<Item>() {
                            new Item {
                                Id = Guid.NewGuid(),
                                Name = "Ticket-01",
                                Active = true,
                                Type = "Ticket",
                                Price = new Price() {
                                    Id = Guid.NewGuid(),
                                    PriceNumber = 1500,
                                    Tax = 25,
                                    StartDate = DateTimeOffset.UtcNow,
                                    EndDate = DateTimeOffset.UtcNow,
                                },
                                Unit = "HuskerIkkeHvaUnitVar",
                                BookAbleResource = new BookAbleResource() {
                                    Id = Guid.NewGuid(),
                                    Name = "Ticket Placement",
                                    Type = "Placement",
                                    StartDate = DateTimeOffset.UtcNow,
                                    EndDate = DateTimeOffset.UtcNow,
                                    Bounds = new LatLngBoundsExpression() {
                                        SouthWest = 00,
                                        NorthEast = 00,
                                        NorthWest = 00,
                                        SouthEasth = 00,
                                    },
                                },
                            },
                        },
                        Type = "Standard Billett",
                    },
                },
                EventLocationInfo = new EventLocationInfo() {
                    Address = "Ola Nordmannsgate 01",
                    ZipCode = "2612",
                    City = "Lillehammer",
                    Country = "Norway",
                },
                EventContactInfo = new EventContactInfo() {
                    Email = "kontakt@fake-no",
                    PhoneNumber = "9988776655",
                    Website = "https://www.fake.no",
                },
                Program =  new Program() {
                    Artists = new List<Artist>() {
                        new Artist {
                            Id = Guid.NewGuid(),
                            Name = "Hellbillies",
                            Description ="Hellbillies er en rockegruppe fra Ål i Hallingdal som ble startet i 1990. Gruppen har gitt ut elleve studioalbum og fire konsert- og ett samlealbum og de fleste har solgt til gull eller platina.",
                            Image =  "/images/artist/hellbillies.jpeg",
                        },
                    },
                    Scenes = new List<Scene>() {
                        new Scene {
                            id = Guid.NewGuid(),
                            Name = "Hovedscene",
                            Description = "Hovedscenen i midten av festivalen.",
                            Location = "Midten av festivalen",
                        },
                    },
                    Happenings = new List<Happening>() {
                        new Happening {
                            Id = Guid.NewGuid(),
                            Name = "Hellbillies på Hovedscenen",
                            Description = "Hellbillies på Hovedscenen.",
                            ArtistId = Guid.NewGuid(),
                            SceneId = Guid.NewGuid(),
                            StartDate = DateTimeOffset.UtcNow,
                            EndDate = DateTimeOffset.UtcNow,
                         },
                    },
                },
                Rules = new List<Rule>() {
                    new Rule {
                        RuleTitle = "Regel 1",
                        RuleContent = "Regel 1 er veldig viktig."
                    },
                },
            }
        };

        public async Task<IEnumerable<Event>> GetEventsAsync()
        {
            return await Task.FromResult(events);
        }

        public async Task DeleteEventAsync(Guid id)
        {
            var index = events.FindIndex(existingEvent => existingEvent.Id == id);
            events.RemoveAt(index);
            await Task.CompletedTask;
        }
    }
}