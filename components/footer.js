import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.footerItem} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.beTheFirstToKnowParent}>
              <b className={styles.beTheFirst}>Be the first to know</b>
              <div className={styles.signUpFor}>
                Sign up for updates from mettā muse.
              </div>
            </div>
            <div className={styles.subscribe}>
              <input
                className={styles.input}
                placeholder="Enter your e-mail..."
                type="text"
              />
              <button className={styles.button}>
                <div className={styles.subscribe1}>Subscribe</div>
              </button>
            </div>
          </div>
          <div className={styles.contactUsParent}>
            <b className={styles.contactUs}>CONTACT US</b>
            <div className={styles.frameWrapper}>
              <div className={styles.customercaremettamusecomParent}>
                <div className={styles.customercaremettamusecom}>
                  +44 221 133 5360
                </div>
                <div className={styles.customercaremettamusecom1}>
                  customercare@mettamuse.com
                </div>
                <img className={styles.frameChild} alt="" src="/star-1.svg" />
              </div>
            </div>
            <div className={styles.currencyParent}>
              <b className={styles.currency}>Currency</b>
              <div className={styles.language}>
                <img
                  className={styles.unitedStatesOfAmericaUs}
                  loading="lazy"
                  alt=""
                  src="/united-states-of-america-us.svg"
                />
                <div className={styles.languageInner}>
                  <img className={styles.frameItem} alt="" src="/star-1.svg" />
                </div>
                <div className={styles.dataProcessor}>
                  <b className={styles.usd}>USD</b>
                </div>
              </div>
              <div className={styles.transactionsWillBe}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stringTransformer} />
      </div>
      <div className={styles.listProcessor}>
        <div className={styles.mettMuseParent}>
          <b className={styles.mettMuse}>mettā muse</b>
          <div className={styles.queueHandler}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.stories}>Stories</div>
            <div className={styles.artisans}>Artisans</div>
            <div className={styles.boutiques}>Boutiques</div>
            <div className={styles.contactUs1}>Contact Us</div>
            <div className={styles.euCompliancesDocs}>EU Compliances Docs</div>
            <div className={styles.joinAsA}>Join as a Seller</div>
          </div>
        </div>
        <div className={styles.graphExplorerParent}>
          <div className={styles.graphExplorer}>
            <div className={styles.quickLinksParent}>
              <b className={styles.quickLinks}>Quick Links</b>
              <div className={styles.arrayAssembler}>
                <div
                  className={styles.ordersShipping}
                >{`Orders & Shipping`}</div>
                <div className={styles.joinloginAsA}>
                  Join/Login as a Seller
                </div>
                <div
                  className={styles.paymentPricing}
                >{`Payment & Pricing`}</div>
                <div className={styles.returnRefunds}>{`Return & Refunds`}</div>
                <div className={styles.faqs}>FAQs</div>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
                <div
                  className={styles.termsConditions}
                >{`Terms & Conditions`}</div>
              </div>
            </div>
            <div className={styles.copyright2023MettamuseAlWrapper}>
              <div className={styles.copyright2023}>
                Copyright © 2023 mettamuse. All rights reserved.
              </div>
            </div>
          </div>
          <div className={styles.functionFusion}>
            <div className={styles.followUsParent}>
              <b className={styles.followUs}>Follow Us</b>
              <div className={styles.fbParent}>
                <div className={styles.fb}>
                  <div className={styles.abefore} />
                  <img className={styles.svgIcon} alt="" src="/svg.svg" />
                </div>
                <div className={styles.insta}>
                  <div className={styles.abefore1} />
                  <img
                    className={styles.svgIcon1}
                    loading="lazy"
                    alt=""
                    src="/svg-1.svg"
                  />
                </div>
                <div className={styles.twitter}>
                  <div className={styles.abefore2} />
                  <img
                    className={styles.twitter3SvgrepoCom1Icon}
                    alt=""
                    src="/twitter3svgrepocom-1.svg"
                  />
                </div>
                <div className={styles.a}>
                  <div className={styles.abefore3} />
                  <img
                    className={styles.mdilinkedinIcon}
                    loading="lazy"
                    alt=""
                    src="/mdilinkedin.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.mettMuseAcceptsParent}>
              <b className={styles.mettMuseAcceptsContainer}>
                {`mettā muse `}
                <span className={styles.accepts}>Accepts</span>
              </b>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-136188.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-136190.svg"
                />
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/group-136192.svg"
                />
                <button className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </button>
                <img
                  className={styles.frameChild2}
                  loading="lazy"
                  alt=""
                  src="/group-136194.svg"
                />
                <button className={styles.rectangleGroup}>
                  <div className={styles.frameChild3} />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-1.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
