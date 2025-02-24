import { useRef } from "react";
import { useInView } from "framer-motion";

export function useSectionInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.5 }); 
  
  return { ref, inView };
}
