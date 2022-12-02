import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: string;
}) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <>
      <motion.div
        transition={{ duration: 0.3 }}
        className={`relative items-center justify-center flex w-full h-screen bg-no-repeat bg-center bg-cover`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${image})`,
          opacity: opacity,
        }}
      >
        <h1 className="text-white font-roboto font-black text-4xl tracking-wide w-[90vw] lg:w-[70vw] md:text-7xl 2xl:text-8xl absolute bottom-72 lg:left-20 md:bottom-80 lg:bottom-44 text-center lg:text-left">
          {name.toLocaleUpperCase()}
        </h1>
        <Link href={`/order/tickets/${id}`}>
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px 0px rgba(0,0,0,1)",
              border: "1px solid #FFF",
            }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.9 }}
            className="py-4 px-16 rounded-lg absolute bottom-44 md:bottom-52 lg:bottom-20 lg:left-20 bg-secondary text-white font-roboto font-bold tracking-wider text-2xl hover:opacity-100 hover:cursor-pointer"
          >
            BESTILL
          </motion.a>
        </Link>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          animate={{ y: ["-20%", "0%"] }}
          transition={{
            duration: 0.75,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 hover:cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <Image
            src="/images/icons/heroDownArrow.svg"
            height={50}
            width={50}
            alt="Arrow showing that you can scroll down to the main content"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
