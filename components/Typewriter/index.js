import { Fade, Box, Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

import { useInView } from "react-intersection-observer";

const index = ({ loop, words, speed }) => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Box ref={ref}>
      <Box>
        {inView && (
          <Typewriter
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
        )}
      </Box>
    </Box>
  );
};

export default index;
