import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";


export const metadata = {
  title: 'Ken Dev About',
  description: 'About page',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            incidunt fuga dicta nostrum, illo doloremque exercitationem impedit
            et vel quis, vitae provident ipsam officiis soluta distinctio?
            Corrupti quo facere fugit eligendi ut repellendus, culpa beatae,
            vero, laudantium dolor porro quae incidunt harum in repudiandae et
            eius. Similique velit animi vel.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            illum architecto alias magni libero hic, adipisci consequatur
            consectetur voluptatum provident aliquam excepturi illo tenetur
            nihil voluptatem reiciendis? Voluptatem repellat labore adipisci
            dolorum inventore animi corrupti tenetur fugiat enim consequatur
            corporis ratione temporibus, asperiores deserunt dolores in quia
            assumenda iusto error!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
