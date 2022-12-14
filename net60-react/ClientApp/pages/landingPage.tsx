import { useScroll } from "framer-motion";
import BigButton from "../components/buttons/BigButton.component";
import DragSlideCarousel from "../components/landingPage/carousel/DragSlideCarousel.component";
import Hero from "../components/landingPage/Hero.component";
import ListArtist from "../components/landingPage/ListArtist.component";
import Rules from "../components/landingPage/Rules.Component";
import { event } from "../components/model/event";
import ScrollProgressBar from "../components/scrollProgressBar/ScrollProgressBar.component";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="">
      <Hero name={event.name} id={event.id} image={event.image} />
      <ScrollProgressBar scrollYProgress={scrollYProgress} />

      {/* MAIN CONTENT */}
      <div className="bg-white">
        <div className="bg-white mb-8 ">
          <DragSlideCarousel artists={event.program.artists} />
        </div>
        <div className="mx-auto mb-40 md:mb-20 px-[5vw] md:px-[10vw] lg:px-[20vw] ">
          {event.program.artists.map((artist) => (
            <ListArtist
              key={artist.name}
              artist={artist}
              program={event.program}
              eventId={event.id}
            />
          ))}
        </div>
        <div className="mx-auto px-[5vw] md:px-[10vw] lg:px-[20vw] md:pt-20 pb-16 flex flex-col gap-10 md:gap-20 bg-white ">
          <Rules rules={event.rules} />
          <BigButton link={`/order/tickets/${event.id}`} text="BESTILL" />
        </div>
      </div>
    </div>
  );
}
