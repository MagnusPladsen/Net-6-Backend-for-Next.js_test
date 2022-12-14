import { Event } from "./models";

export const event: Event = {
    id: "vinstra-2024",
    name: "Vinstra Country Music Festival 2024",
    description: "Vinstra Country Music Festival 2024",
    image: "/images/hero.jpeg",
    logo: "/images/vinstraFestival.png",
    dates: {
      startDate: new Date("01 Oct 2024 00:00:00 GMT"),
      endDate: new Date("06 Oct 2024 00:00:00 GMT"),
    },
    tickets: [
      {
        id: "ticket-1",
        name: "Festivalpass",
        price: 1000,
        description: "Tilskuer plass",
        icon: "/images/icons/ticketIcon.svg",
      },
      {
        id: "ticket-2",
        name: "Festivalpass PREMIUM",
        price: 1500,
        description: "Tilskuer plass med PREMIUM plassering",
        icon: "/images/icons/ticketIcon.svg",
      },
      {
        id: "ticket-3",
        name: "Festivalpass m/Camping",
        price: 2000,
        description: "Tilskuer plass med camping",
        icon: "/images/icons/campingIcon.svg",
      },
      {
        id: "ticket-4",
        name: "Festivalpass m/Camping og strøm",
        price: 2200,
        description: "Tilskuer plass med camping og strøm tilgang",
        icon: "/images/icons/campingIcon.svg",
      },
    ],
    locationInfo: {
      address: "Strandfata 1",
      zipCode: "2640",
      city: "Vinstra",
      country: "Norway",
    },
    contactInfo: {
      email: "info@festivaldrift.no",
      phoneNumber: 12345678,
      website: "https://countryfestivalenvinstra.no/",
    },
    program: {
      artists: [
        {
          id: "01",
          name: "Hellbillies",
          description:
            "Hellbillies er en rockegruppe fra Ål i Hallingdal som ble startet i 1990. Gruppen har gitt ut elleve studioalbum og fire konsert- og ett samlealbum og de fleste har solgt til gull eller platina.",
          image: "/images/artist/hellbillies.jpeg",
        },
        {
          id: "02",
          name: "Rotlaus",
          description:
            "Rotlaus er et norsk band fra Ørsta på Sunnmøre. Bandet ble etablert i 2015. Rotlaus' første album Bygderamp havnet på topp ti på VG-lista. Bandet fikk utdelt første gullplate for salg og strømming med låten Byjenta i 2017.",
          image: "/images/artist/rotlaus.jpeg",
        },
        {
          id: "03",
          name: "Staut",
          description:
            "Staut er et folkrockband fra Bagn i Valdres som ble etablert i 2010. Musikken er en kombinasjon av folkemusikk, rock og country, noe som avspeiler at de seks bandmedlemmene har ulik bakgrunn.",
          image: "/images/artist/staut.jpeg",
        },
        {
          id: "04",
          name: "Vassendgutane",
          description:
            "Vassendgutane er et norsk band fra bygda Åmdalen i Ørsta som spiller sin egen variant av country som de selv kaller «fest-country». Vassendgutane har gjort stor suksess som konsertband rundt omkring i Norge med sin uhøytidelige og humoristiske vri på countrymusikken.",
          image: "/images/artist/vassendgutane.jpeg",
        },
     /*    {
          id: "05",
          name: "Hellbillies2",
          description:
            "Hellbillies er en rockegruppe fra Ål i Hallingdal som ble startet i 1990. Gruppen har gitt ut elleve studioalbum og fire konsert- og ett samlealbum og de fleste har solgt til gull eller platina.",
          image: "/images/artist/hellbillies.jpeg",
        },
        {
          id: "06",
          name: "Rotlaus2",
          description:
            "Rotlaus er et norsk band fra Ørsta på Sunnmøre. Bandet ble etablert i 2015. Rotlaus' første album Bygderamp havnet på topp ti på VG-lista. Bandet fikk utdelt første gullplate for salg og strømming med låten Byjenta i 2017.",
          image: "/images/artist/rotlaus.jpeg",
        },
        {
          id: "07",
          name: "Staut2",
          description:
            "Staut er et folkrockband fra Bagn i Valdres som ble etablert i 2010. Musikken er en kombinasjon av folkemusikk, rock og country, noe som avspeiler at de seks bandmedlemmene har ulik bakgrunn.",
          image: "/images/artist/staut.jpeg",
        },
        {
          id: "08",
          name: "Vassendgutane2",
          description:
            "Vassendgutane er et norsk band fra bygda Åmdalen i Ørsta som spiller sin egen variant av country som de selv kaller «fest-country». Vassendgutane har gjort stor suksess som konsertband rundt omkring i Norge med sin uhøytidelige og humoristiske vri på countrymusikken.",
          image: "/images/artist/vassendgutane.jpeg",
        },
        {
          id: "09",
          name: "Hellbillies3",
          description:
            "Hellbillies er en rockegruppe fra Ål i Hallingdal som ble startet i 1990. Gruppen har gitt ut elleve studioalbum og fire konsert- og ett samlealbum og de fleste har solgt til gull eller platina.",
          image: "/images/artist/hellbillies.jpeg",
        },
        {
          id: "10",
          name: "Rotlaus3",
          description:
            "Rotlaus er et norsk band fra Ørsta på Sunnmøre. Bandet ble etablert i 2015. Rotlaus' første album Bygderamp havnet på topp ti på VG-lista. Bandet fikk utdelt første gullplate for salg og strømming med låten Byjenta i 2017.",
          image: "/images/artist/rotlaus.jpeg",
        },
        {
          id: "11",
          name: "Staut3",
          description:
            "Staut er et folkrockband fra Bagn i Valdres som ble etablert i 2010. Musikken er en kombinasjon av folkemusikk, rock og country, noe som avspeiler at de seks bandmedlemmene har ulik bakgrunn.",
          image: "/images/artist/staut.jpeg",
        },
        {
          id: "12",
          name: "Vassendgutane3",
          description:
            "Vassendgutane er et norsk band fra bygda Åmdalen i Ørsta som spiller sin egen variant av country som de selv kaller «fest-country». Vassendgutane har gjort stor suksess som konsertband rundt omkring i Norge med sin uhøytidelige og humoristiske vri på countrymusikken.",
          image: "/images/artist/vassendgutane.jpeg",
        }, */
      ],
      scenes: [
        {
          id: "01",
          name: "Hovedscene",
          description: "Hovedscene med 3 artister",
          location: "Hovedscene i midten",
        },
        {
          id: "02",
          name: "Skogscene",
          description: "Scenen i skogen med 2 artister",
          location: "Scenen i skogen",
        },
      ],
      happenings: [
        {
          id: "01",
          name: "Hellbillies Onsdag",
          description: "Hellbillies spiller live på onsdag på hovedscenen",
          artistId: "01",
          sceneId: "01",
          startDate: new Date("01 Oct 2024 18:00:00 GMT"),
          endDate: new Date("01 Oct 2024 20:00:00 GMT"),
        },
        {
          id: "02",
          name: "Rotlaus Onsdag",
          description: "Rotlaus spiller live på torsdag på Skogscenen",
          artistId: "02",
          sceneId: "02",
          startDate: new Date("01 Oct 2024 20:00:00 GMT"),
          endDate: new Date("01 Oct 2024 22:00:00 GMT"),
        },
        {
          id: "03",
          name: "Staut Torsdag",
          description: "Staut spiller live på fredag på hovedscenen",
          artistId: "03",
          sceneId: "01",
          startDate: new Date("02 Oct 2024 18:00:00 GMT"),
          endDate: new Date("02 Oct 2024 20:00:00 GMT"),
        },
        {
          id: "04",
          name: "Vassendgutane Torsdag",
          description: "Vassendgutane spiller live på lørdag på hovedscenen",
          artistId: "04",
          sceneId: "01",
          startDate: new Date("02 Oct 2024 20:00:00 GMT"),
          endDate: new Date("02 Oct 2024 22:00:00 GMT"),
        },
        {
          id: "05",
          name: "Hellbillies Fredag",
          description: "Hellbillies spiller live på onsdag på hovedscenen",
          artistId: "01",
          sceneId: "02",
          startDate: new Date("03 Oct 2024 18:00:00 GMT"),
          endDate: new Date("03 Oct 2024 20:00:00 GMT"),
        },
        {
          id: "06",
          name: "Rotlaus Fredag",
          description: "Rotlaus spiller live på torsdag på Skogscenen",
          artistId: "02",
          sceneId: "02",
          startDate: new Date("03 Oct 2024 20:00:00 GMT"),
          endDate: new Date("03 Oct 2024 22:00:00 GMT"),
        },
        {
          id: "07",
          name: "Staut Lørdag",
          description: "Staut spiller live på fredag på hovedscenen",
          artistId: "03",
          sceneId: "02",
          startDate: new Date("04 Oct 2024 18:00:00 GMT"),
          endDate: new Date("04 Oct 2024 20:00:00 GMT"),
        },
        {
          id: "09",
          name: "Vassendgutane Lørdag",
          description: "Vassendgutane spiller live på lørdag på hovedscenen",
          artistId: "04",
          sceneId: "02",
          startDate: new Date("04 Oct 2024 20:00:00 GMT"),
          endDate: new Date("04 Oct 2024 22:00:00 GMT"),
        },
      ],
    },
    rules: {
      "Mat og Drikke":
        "Medbrakt mat og drikke er ikke tillatt på festivalområdet. På festivalområdet selges derimot mat for de fleste ganer; pizza, hamburgere, vegetarmat, biff, sandwich, pølser, m.m. Det er selvfølgelig lov å ta med mat og drikke inn på campingen.",
      Fotoregler:
        "Opptaksutstyr for lyd og bilde er ikke tillatt. Pressefotografer må ha særskilt tillatelse. Mobiltelefoner med kamera, og kompaktkamera er lovlig å ta med inn.",
      "Beskytt hørselen din":
        "4 dager på festival kan bety mye lyd for ørene dine. Vil du vite mer om beskyttelse av hørselen din? Besøk www.ørepropper.no",
      Kjæledyr: "Kjæledyr er ikke tillatt på festivalområdet.",
      Paraply:
        "Vi håper selvsagt på solskinn, men skulle det blir fare for regn bør du ta med deg en regnfrakk. Av sikkerhetsmessige grunner tillates ikke paraply. Du får også kjøpt regnponcho inne på området.",
    },
    addOnProducts: [
      {
        id: "01",
        name: "Campingplass",
        price: 1000,
        type: "camping",
        description: "Campingplass for 1 person",
      },
      {
        id: "02",
        name: "Parkeringsplass",
        price: 500,
        type: "parkering",
        description: "Parkeringsplass for 1 bil",
      },
    ],
  };