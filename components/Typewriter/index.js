import { Box } from "@chakra-ui/react";
import { Typewriter as Typew } from "react-simple-typewriter";

import { useInView } from "react-intersection-observer";

export const Typewriter = ({ loop, words, speed }) => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Box ref={ref}>
      <Box>
        {inView ? (
          <Typew
            words={words}
            loop={loop}
            cursor="|"
            cursorStyle="|"
            typeSpeed={speed}
            deleteSpeed={50}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        ) : (
          <Box>{words[0]}</Box>
        )}
      </Box>
    </Box>
  );
};
