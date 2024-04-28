import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BlogBloom</div>
      <div className={styles.text}>
        BlogBloom creative thoughts agency ©2024 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;