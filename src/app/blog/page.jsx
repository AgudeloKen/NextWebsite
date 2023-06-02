import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if(!res.ok){
    throw new Error("Failed to fetch data.");
  }

  return res.json();
}

export const metadata = {
  title: 'Ken Dev Blog',
  description: 'Blog page',
}

const Blog = async () => {

  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((item) => (
          <Link key={item._id} href={`/blog/${item._id}`} className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              src={
                item.img
              }
              width={400}
              height={250}
              alt="blog"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
