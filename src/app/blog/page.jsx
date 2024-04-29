import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

//FETCH DATA WITH AN API 
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Something went wrong!");
//   }
//   return res.json();
// };

// const posts = await getData();

const BlogPage = async () => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
