import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";


export const metadata = {
  title: 'Ken Dev Contact',
  description: 'Contact page',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/contact.png"}
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            className={styles.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <Button url={"#"} text={"Send Message"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
