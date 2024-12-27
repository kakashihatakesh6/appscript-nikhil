import styles from "../styles/Frame-component1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.ppxocMilkywayDressInPresseParent}>
        <b className={styles.ppxocMilkywayDress}>
          PPXOC Milkyway dress in pressed flowers
        </b>
        <div className={styles.exploreThisSkill}>Explore this skill</div>
        <div className={styles.frameParent}>
          <div className={styles.signInOrCreateAnAccountTWrapper}>
            <div className={styles.signInOrContainer}>
              <span className={styles.signIn}>Sign in</span> or Create an
              account to see pricing
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
    </div>
  );
};

export default FrameComponent1;
