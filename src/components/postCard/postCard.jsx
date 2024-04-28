import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.jpg" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>04/26/2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>body</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>

    </div>
  )
}

export default PostCard