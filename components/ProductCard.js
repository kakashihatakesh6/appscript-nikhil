import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({data}) => {
    return (
        <div className={styles.productCardContainer}>
            
            <div className={styles.productCardImage}>
                {/* <img className={styles.productImage} alt="" src="/hover-pic@2x.png" /> */}
                <img
                    className={styles.productImage}
                    loading="lazy"
                    alt=""
                    src={data?.image || "/front-pic@2x.png"}
                />
            </div>

            <div className={styles.productDetails}>

                <div className={styles.productTitle}>
                    <b>
                        {data?.title || 'PPXOC Milkyway dress in pressed flowers'}
                    </b>
                </div>

                <div className={styles.productInfoContainer}>
                    <div className={styles.productInfo}>
                        <div className={styles.productSignIn}>
                            <span className={styles.signIn}>Sign in</span> or Create an
                            account to see pricing
                        </div>
                    </div>
                    <div className={styles.productFavIcon}>
                        <img
                            loading="lazy"
                            alt="fav-icon"
                            src={"/vuesaxlinearheart-2.svg"}
                        />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProductCard