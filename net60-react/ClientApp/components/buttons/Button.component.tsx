import { motion } from "framer-motion";

export default function PrimaryButton({
  text,
  primary,
  disabled,
  onClick,
}: {
  text: string;
  primary: boolean;
  disabled: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <motion.button
        whileHover={{
          scale: disabled ? 1 : 1.1,
          border: !disabled ? primary ? "1px solid #FFF" : "1px solid #3F9EC8": "",
          boxShadow: disabled ? "" : "0px 0px 10px 0px rgba(0,0,0,0.25)",
        }}
        transition={{ duration: 0.2 }}
        whileTap={{ scale: disabled ? 1 : 0.9 }}
        onClick={onClick}
        disabled={disabled}
        className={` ${
          primary ? "bg-secondary text-white" : "bg-white text-primary"
        } ${
          disabled ? "bg-gray-300 text-gray-500" : ""
        } md:w-48 h-14 lg:h-11 w-full rounded-lg font-roboto font-bold drop-shadow-default`}
      >
        {text}
      </motion.button>
    </>
  );
}
