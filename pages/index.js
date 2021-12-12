import dynamic from "next/dynamic";

import styles from "../styles/Home.module.scss";
import utilStyles from "../styles/utils.module.scss";

import { motion } from "framer-motion";
const DisplacementSphere = dynamic(() =>
  import("../components/DisplacementSphere")
);

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <DisplacementSphere
          className={styles.introBackground}
          theme={{
            rgbBackground: "248 229 229",
            themeId: "light",
            colorWhite: "#ffffff",
          }}
        />
      </motion.div>
    </div>
  );
}
