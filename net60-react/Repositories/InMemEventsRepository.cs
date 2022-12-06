using net60_react.Entities;

namespace net60_react.Repositories
{
    public class InMemEventsRepository : EventsRepository
    {
        private readonly List<Event> events = new()
        {

            new Event{
                Id = Guid.NewGuid(), Name = "Vinstra Country Festival 2024", Description = "Vintra Country Festival 2024", Image = "/images/hero.jpeg", Logo = "/images/vinstraFestival.png",
                Dates = {
                    StartDate = DateTimeOffset.UtcNow, EndDate = DateTimeOffset.UtcNow
                },
                Product = {
                    Id = Guid.NewGuid(),
                    Name = "Ticket-01",
                    Item = {
                        Id = Guid.NewGuid(),
                        Name = "Ticket-01",
                        Active = true,
                        Type = "Ticket",
                        Price = {
                            Id = Guid.NewGuid(),
                            PriceNumber = 1500,
                            Tax = 25,
                            StartDate = DateTimeOffset.UtcNow,
                            EndDate = DateTimeOffset.UtcNow,
                        },
                        Unit = "HuskerIkkeHvaUnitVar",
                        BookAbleResource = {
                            Id = Guid.NewGuid(),
                            Name = "Placement",
                            StartDate = DateTimeOffset.UtcNow,
                            EndDate = DateTimeOffset.UtcNow,
                            Bounds = {
                                SouthWest = 00,
                                NorthEast = 00,
                                NorthWest = 00,
                                SouthEasth = 00,
                            },
                        },
                    },
                    Type = "Standard Billett",
                },
                EventLocationInfo = {
                    Address = "Ola Nordmannsgate 01",
                    ZipCode = "2612",
                    City = "Lillehammer",
                    Country = "Norway",
                },
                EventContactInfo = {
                    Email = "kontakt@fake-no",
                    PhoneNumber = "9988776655",
                    Website = "www.fake.no",
                },
                Program = {
                    Artist = {
                        Id = Guid.NewGuid(),
                        Name = "Hellbillies",
                        Description ="Hellbillies er en rockegruppe fra Ål i Hallingdal som ble startet i 1990. Gruppen har gitt ut elleve studioalbum og fire konsert- og ett samlealbum og de fleste har solgt til gull eller platina.",
                        Image =  "/images/artist/hellbillies.jpeg",
                    },
                    Scene = {
                        id = Guid.NewGuid(),
                        Name = "Hovedscene",
                        Description = "Hovedscenen i midten av festivalen.",
                        Location = "Midten av festivalen",
                    },
                    Happening = {
                        Id = Guid.NewGuid(),
                        Name = "Hellbillies på Hovedscenen",
                        Description = "Hellbillies på Hovedscenen.",
                        ArtistId = Guid.NewGuid(),
                        SceneId = Guid.NewGuid(),
                        StartDate = DateTimeOffset.UtcNow,
                        EndDate = DateTimeOffset.UtcNow,
                    },
                },
                Rules = {
                    "Regel 1" = "Regel 1 er viktig."
                }
            },
        };

        public async Task<IEnumerable<Ticket>> GetTicketsAsync()
        {
            return await Task.FromResult(tickets);
        }

        public async Task<Ticket> GetTicketAsync(Guid id)
        {
            var ticket = tickets.Where(ticket => ticket.Id == id).SingleOrDefault();
            return await Task.FromResult(ticket);
        }

        public async Task CreateTicketAsync(Ticket ticket)
        {
            tickets.Add(ticket);
            await Task.CompletedTask;
        }

        public async Task UpdateTicketAsync(Ticket ticket)
        {
            var index = tickets.FindIndex(existingTicket => existingTicket.Id == ticket.Id);
            tickets[index] = ticket;
            await Task.CompletedTask;
        }

        public async Task DeleteTicketAsync(Guid id)
        {
            var index = tickets.FindIndex(existingTicket => existingTicket.Id == id);
            tickets.RemoveAt(index);
            await Task.CompletedTask;
        }
    }
}