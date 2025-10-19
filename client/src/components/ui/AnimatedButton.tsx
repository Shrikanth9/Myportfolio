import { Button, ButtonProps } from "./button";
import { motion } from "framer-motion";

export function AnimatedButton(props: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ display: "inline-block" }}
    >
      <Button {...props} />
    </motion.div>
  );
}
