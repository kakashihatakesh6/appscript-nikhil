import Link from "next/link";
import styles from "./header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={styles.headerParent}>

      <div className={styles.headerContainer}>

        <header className={styles.header}>

          <div className={styles.logoHamContainer}>

            {/* Mobile Menu Hamburger */}

            <div className={styles.hamContainer}>
              <div className={styles.hamburger}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.5L18 9.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M2 16L18 16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M2 3L18 3" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
            </div>

            {/* Logo Image  */}
            <div className={styles.logoImgContainer}>
              <img
                className={styles.logoImage}
                loading="lazy"
                alt=""
                src="/logo.svg"
              />
            </div>

          </div>

          {/* Title  */}

          <div className={styles.logoTitleContainer}>
            <h1 className={styles.logoTitle}>LOGO</h1>
          </div>

          {/* Header Tools */}

          <div className={styles.headerLinkContainer}>

            <div className={styles.headerLinkBar}>

              <div className={styles.headerLink}>
                <img
                  className={styles.headerLinkImg}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearsearchnormal.svg"
                />
              </div>

              <div className={styles.headerLink}>
                <img
                  className={styles.headerLinkImg}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </div>

              <div className={styles.headerLink}>
                <img
                  className={styles.headerLinkImg}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearshoppingbag.svg"
                />
              </div>

              <div
                // className={styles.headerLink}
                className={`${styles.headerLink} ${styles.hiddenLink}`}
              >
                <img
                  className={styles.headerLinkImg}
                  loading="lazy"
                  alt=""
                  src="/vuesaxtwotoneprofile.svg"
                />
              </div>

              <div className={`${styles.headerLink} ${styles.hiddenLink}`}>

                <select className={styles.headerLinkLang}>
                  <option defaultValue={"ENG"}>ENG</option>
                  <option value={"HIN"}>HIN</option>
                </select>
                {/* <img
                    className={styles.vuesaxlineararrowLeftIcon1}
                    alt=""
                    src="/vuesaxlineararrowleft@2x.png"
                  /> */}
              </div>


            </div>

          </div>


        </header>

        <div className={styles.navContainer}>
          {/*========= Navbar ============== */}
          <nav className={styles.sequenceProcessor}>
            <div className={styles.tabs}>
              <div className={styles.navLinkDiv}>
                <Link href={'/'} className={styles.linkContainer}>
                  <b className={styles.linkShop}>SHOP</b>
                </Link>
              </div>
              <div className={styles.navLinkDiv}>
                <Link href={'/'} className={styles.linkContainer}>
                  <b className={styles.linkShop}>SKILLS</b>
                </Link>
              </div>
              <div className={styles.navLinkDiv}>
                <Link href={'/'} className={styles.linkContainer}>
                  <b className={styles.linkShop}>STORIES</b>
                </Link>
              </div>
              <div className={styles.navLinkDiv}>
                <Link href={'/'} className={styles.linkContainer}>
                  <b className={styles.linkShop}>ABOUT</b>
                </Link>
              </div>
              <div className={styles.navLinkDiv}>
                <Link href={'/'} className={styles.linkContainer}>
                  <b className={styles.linkShop}>CONTACT US</b>
                </Link>
              </div>





              {/* <div className={styles.tab2Parent}>
                <div className={styles.tab2}>
                  <b className={styles.skills}>SKILLS</b>
                </div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.tab3}>
                <b className={styles.stories}>STORIES</b>
                <div className={styles.tab3Child} />
              </div>
              <div className={styles.tab4}>
                <b className={styles.about}>ABOUT</b>
                <div className={styles.tab4Child} />
              </div>
              <div className={styles.tab5}>
                <b className={styles.contactUs}>CONTACT US</b>
                <div className={styles.tab5Child} />
              </div> */}
            </div>
          </nav>
        </div>
      </div>




    </div>
  );
};

export default Header;
