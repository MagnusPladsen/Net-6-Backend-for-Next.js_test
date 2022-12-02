import { motion } from "framer-motion";
import Link from "next/link";

export default function BigButton({link, text} : {link: string, text: string}) {
  return (
    <>
      <Link href={link}>
        <motion.a
          whileHover={{
            scale: 1.1,
            border: "1px solid #FFF",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.50)",
          }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.9 }}
          className="py-4 px-16 rounded-lg bg-secondary text-white font-roboto font-bold tracking-wider text-xl hover:opacity-100 hover:cursor-pointer w-fit mx-auto"
        >
          {text}
        </motion.a>
      </Link>
    </>
  );
}
