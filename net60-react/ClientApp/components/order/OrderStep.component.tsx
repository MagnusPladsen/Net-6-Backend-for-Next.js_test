import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Button from "../buttons/Button.component";
import StepTitle from "../tiles/StepTitle.component";

export default function OrderStep({
  open,
  number,
  title,
  stepIndex,
  setStepIndex,
  children,
  isValid,
  validateForm,
  setTouched,
}: {
  open: boolean;
  number: number;
  title: string;
  stepIndex: number;
  setStepIndex: (value: number) => void;
  children: React.ReactNode;
  isValid?: boolean;
  validateForm: () => Promise<any>;
  setTouched?: () => void;
}) {
  const onNext = async () => {
    const errors = await validateForm();

    if (!!setTouched) setTouched();

    if (!errors || Object.keys(errors).length === 0) {
      setStepIndex(stepIndex + 1);
    }
  };

  return (
    <div>
      <StepTitle
        title={title}
        number={number}
        active={open}
        stepIndex={stepIndex}
        setStepIndex={setStepIndex}
      />
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
            <div className="mt-8 flex gap-8 pb-8 lg:gap-0 flex-row lg:justify-between">
              <Button
                text="Forrige"
                onClick={() => setStepIndex(stepIndex - 1)}
                primary={false}
                disabled={stepIndex === 0}
              />
              <Button
                text="Neste"
                onClick={onNext}
                primary={true}
                disabled={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
