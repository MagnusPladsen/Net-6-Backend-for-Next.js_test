import { motion } from "framer-motion";

export default function StepTitle({
  title,
  number,
  active,
  stepIndex,
  setStepIndex,
}: {
  title: string;
  number: number;
  active: boolean;
  stepIndex: number;
  setStepIndex: (value: number) => void;
}) {
  return (
    <motion.div
      className={`flex gap-6 items-center mt-12 lg:-ml-12 mb-8 ${
        stepIndex + 1 > number && "hover:cursor-pointer"
      } `}
      onClick={
        stepIndex + 1 > number ? () => setStepIndex(number - 1) : undefined
      }
      initial={false}
      animate={{
        opacity: active ? 1 : 0.5,
      }}
      transition={{ duration: 0.2 }}
      whileHover={stepIndex + 1 > number ? { opacity: 1 } : {}}
    >
      <div
        className={`w-7 h-7 bg-primary rounded-full text-center text-white text-xl font-bold font-roboto justify-center `}
      >
        {number}
      </div>
      <h1 className={`font-bold text-primary text-3xl lg:text-4xl `}>
        {title}
      </h1>
    </motion.div>
  );
}
