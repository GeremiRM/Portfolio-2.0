import { Typewriter } from "react-simple-typewriter";

const index = ({ loop, words, cursor, speed }) => {
  return (
    <Typewriter
      words={words}
      loop={loop}
      cursor={cursor}
      cursorStyle="|"
      typeSpeed={speed}
      deleteSpeed={50}
      delaySpeed={2000}
      // onLoopDone={handleDone}
      // onType={handleType}
    />
  );
};

export default index;
