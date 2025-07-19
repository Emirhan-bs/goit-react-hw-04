import styles from "./Loader.module.css";
import React from "react";

function Loader() {
  return (
    <div className={styles.loader}>
      <img
        src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif
"
        alt="Loading gallery..."
        className={styles.loaderGif}
      />
    </div>
  );
}

export default Loader;
