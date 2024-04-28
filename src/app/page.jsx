import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Create a blog worth sharing</h1>
        <p className={styles.desc}>
          Get a full suite of intuitive design features and powerful marketing
          tools to create a unique blog that leaves a lasting impression.
        </p>
        <div className={styles.buttons}>
          <div className={styles.button}>Learn More</div>
          <div className={styles.button}>Contact</div>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>

        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;



