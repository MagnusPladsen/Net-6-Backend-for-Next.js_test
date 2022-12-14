import { motion } from "framer-motion";
import React from "react";

export default function Tile({
  error,
  children,
  className, // passtrough
  borderOnHover = true, //true as default
  scaleOnHover = false, //false as default
  onClick = () => {}, //empty function as default
}: {
  error?: boolean;
  children: React.ReactNode;
  className?: string;
  borderOnHover?: boolean;
  scaleOnHover?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={{ border: borderOnHover ? "1px solid #DC1C83" : "", scale: scaleOnHover ? 1.05 : 1 }}
      className={`${
        error ? "border-red-600" : "border-border"
      } bg-white rounded-lg drop-shadow-default border mb-8 w-full p-8 ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
