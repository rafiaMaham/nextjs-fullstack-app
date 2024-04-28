import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.jpg" alt="single post" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <Image
            src="/post.jpg"
            alt="single post"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>04/17/2024</span>
          </div>
        </div>

        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam vitae, ipsam asperiores quaerat dolores cupiditate minima ex eius vel.</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
