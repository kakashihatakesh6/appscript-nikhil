import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.productNameParent}>
      <b className={styles.productName}>Product Name</b>
      <div className={styles.frameParent}>
        <div className={styles.signInOrCreateAnAccountTWrapper}>
          <div className={styles.signInOrContainer}>
            <span className={styles.signIn}>Sign in</span> or Create an account
            to see pricing
          </div>
        </div>
        <img
          className={styles.vuesaxlinearheartIcon}
          loading="lazy"
          alt=""
          src="/vuesaxlinearheart-2.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
