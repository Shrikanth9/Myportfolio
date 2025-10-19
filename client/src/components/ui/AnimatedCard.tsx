import { Card } from "./card";
import * as React from "react";
import { motion } from "framer-motion";

export function AnimatedCard(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 24 }}
      style={{ display: "block" }}
    >
      <Card {...props} />
    </motion.div>
  );
}
