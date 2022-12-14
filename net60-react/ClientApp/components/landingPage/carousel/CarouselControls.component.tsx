import { AnimationControls, motion } from "framer-motion";
import SideArrowIcon from "../../icons/SideArrowIcon.component";

export default function CarouselControls({ width, controls, artistsLength }: { width: number; controls: AnimationControls; artistsLength: number }) {
  function dragToEnd() {
    controls.start({
      x: -width,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 50,
        duration: artistsLength*0.4,
      },

    });
    
  }

  function dragToStart() {
    controls.start({
      x: -1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 50,
        duration: artistsLength*0.4,
      },
    });
  }
  return (
    <div className="flex justify-between relative top-44 md:top-72 lg:top-60 2xl:top-80 mx-4 lg:mx-8">
      <motion.div
        onClick={() => dragToStart()}
        className=" relative  text-white hover:text-primary z-20"
        whileHover={{ scale: 1.5 }}
      >
        <SideArrowIcon direction="left" />
      </motion.div>
      <motion.div
        onClick={() => dragToEnd()}
        className="relative text-white hover:text-primary z-20"
        whileHover={{ scale: 1.5 }}
      >
        <SideArrowIcon direction="right" />
      </motion.div>
    </div>
  );
}
