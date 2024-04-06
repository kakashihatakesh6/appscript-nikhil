import Filters from "../components/filters";
import Footer from "../components/footer";
import styles from "./index.module.css";

const WebPLPWithFilterExpanded = () => {
  return (

    <>
      {/* <Header /> */}

      <main className={styles.homeMain}>



        {/* Breadscrumb  */}
        <div className={styles.breadscrumbParent}>
          <div className={styles.breadscrumbContainer}>
            <div className={styles.breadscrumb}>
              HOME <span className={styles.lineVerticle}>|</span> <span className={styles.breadscrumbShop}>SHOP</span>
            </div>
          </div>
        </div>

        {/* Home Title */}
        <div className={styles.homeTitleBox}>

          <div className={styles.homeTitleMain}>
            <div className={styles.homeTitleContainer}>
              <div className={styles.homeTitle}>
                <h1>
                  Discover our products
                </h1>
              </div>
              <div className={styles.homeSubTitle}>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
                dolor.
              </div>
            </div>
          </div>

        </div>

        {/* Home Content */}

        <div className={styles.contentParent}>
          <section className={styles.contentContainer}>
            <Filters />
            {/* <DepthFirstSearch /> */}
          </section>
        </div>


      </main>

      <Footer />
    </>
  );
};

export default WebPLPWithFilterExpanded;
