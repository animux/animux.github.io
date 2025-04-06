import { motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.6 },
  },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

export const TypewriterEffect = ({ text, ...rest }) => (
  <motion.h1
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.h1>
);
