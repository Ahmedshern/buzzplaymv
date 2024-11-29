import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedEntranceProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedEntrance({ 
  children, 
  className,
  delay = 0 
}: AnimatedEntranceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
} 