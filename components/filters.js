import { useState, useEffect } from "react";
import styles from "../styles/filters.module.css";
import ProductCard from "./ProductCard";
import axios from 'axios';


const Filters = ({ sData, onFilterSelect }) => {
  const [showToggle, setShowToggle] = useState(false);
  const [showDropToggle, setShowDropToggle] = useState(false);
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState('electronics')
  const [isLoading, setIsLoading] = useState(false)
  const [show, setShow] = useState(false)

  const fetchData = async () => {
    console.log("im hitting fetch data")
    try {
      setIsLoading(true)
      const res = await axios.get('https://fakestoreapi.com/products');
      const data = res.data;
      setProducts(data);
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  const getAllCategories = async () => {
    console.log("im hitting all categories")
    try {
      const res = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(res.data)
    } catch (error) {
      console.log("Some Error occurred while fetching data!", error)
    }
  }

  useEffect(() => {
    fetchData();
    getAllCategories()
  }, [])

  const getSelectedCategory = async () => {
    console.log("im hitting getselected category")
    try {
      setIsLoading(true)
      console.log("selected category =>", selectedCategory)
      const res = await axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`);
      console.log("res and cat =>", res)
      setProducts(res.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log("Some Error occurred while fetching data!", error)
    }
  }

  useEffect(() => {
    getSelectedCategory();
  }, [selectedCategory])

  const handleShowHideToggle = () => {
    setShowToggle(!showToggle);
  }

  const handleShowDropToggle = () => {
    setShowDropToggle(!showDropToggle);
  }

  console.log("selected cat =>", selectedCategory)

  const filterCategories = ['IDEAL FOR', 'OCCASSION', 'WORK', 'FABRIC', 'SEGMENT', 'SUITABLE FOR', 'RAW MATERIALS', 'PATTERN']

  return (
    <>
      <main className={styles.filterMain}>


        {/* Filter Bar */}
        <div className={styles.filterBar}>

          <div className={styles.filterBarContainer}>

            <div className={styles.filterShowHide}>

              <div className={styles.itemsNumber}>
                <b>{sData.length || '3211'} ITEMS</b>
              </div>

              <div className={styles.showHideToggle} onClick={handleShowHideToggle}>
                {showToggle ? (
                  <div className={styles.showHide}>
                    <img
                      alt="arrow-right"
                      src="/vuesaxlineararrowleft-8.svg"
                    />
                    <div className={styles.showHideTitle}>SHOW FILTER</div>
                  </div>
                ) : (
                  <div className={styles.showHide}>
                    <img
                      alt="arrow-right"
                      src="/vuesaxlineararrowleft-8.svg"
                    />
                    <div className={styles.showHideTitle}>HIDE FILTER</div>
                  </div>
                )}
              </div>

            </div>

            <div className={styles.filterMobile}>
              <b>FILTER</b>
            </div>

            <div className={styles.recommendedParent}>
              <div className={styles.recommendedContainer} onClick={handleShowDropToggle}>

                <div className={styles.recommendedDrop} >
                  <b>recommended</b>
                  <div className={styles.recommendedArrow}>
                    <img
                      alt="arrow-down"
                      src="/vuesaxlineararrowleft@2x.png"
                    />
                  </div>
                </div>


                {showDropToggle &&

                  <div className={styles.recommendedDropMenu}>
                    <div className={styles.optionDropMenu}>
                      <img
                        className={styles.optionDropMenuImage}
                        loading="lazy"
                        alt=""
                        src="/materialsymbolschecksmallrounded.svg"
                      />
                      <b>Recommended</b>
                    </div>

                    <div className={styles.optionDropMenu}>Newest first</div>
                    <div className={styles.optionDropMenu}>popular</div>
                    <div className={styles.optionDropMenu}>Price : high to low12</div>
                    <div className={styles.optionDropMenu}>Price : low to high</div>
                  </div>
                }

              </div>
            </div>

          </div>


        </div>

        {/* Filter Options   */}

        <div className={styles.filterContentParent}>

          {!showToggle &&

            <div className={styles.filterColumn}>

              <div className={styles.checkboxContainerr}>
                <input type="checkbox" />
                <b>Customizble</b>
              </div>

              <div className={styles.seperator} />


              {/* Filter-1 IDEAL FOR   */}

              {filterCategories.map((item, index) => (
                <div key={index} className={styles.filterItemContainer}>

                  <div className={styles.filterTitleContainer}>
                    <b>{item || "IDEAL FOR"}</b>
                    <div onClick={() => setShow(!show)} className={styles.filterItemImage} >
                      <img
                        alt="arrow-down"
                        src={!show ? '/icons/arrowdown.svg' : '/icons/arrowup.svg'}
                      />
                    </div>
                  </div>

                  <div className={styles.filterSubtitle}>All</div>
                  <div className={styles.unselectAlll}>Unselect all</div>

                  {show &&
                    <div className={styles.filterItemOptions}>

                      {categories && categories.map((category, index) => (
                        <div key={index} className={styles.checkboxOptionContainer}>
                          <input className={styles.checkboxOption} checked={category === selectedCategory} onChange={() => setSelectedCategory(category)} type="checkbox" />
                          <div className={styles.checkboxOptionTitle}>{category}</div>
                        </div>
                      ))}

                    </div>
                  }

                </div>
              ))}

              <div className={styles.seperator11} />

              {/* Filter-11 IDEAL FOR   */}

              {/* <div className={styles.filterItemContainer}>
                <div>
                  <div className={styles.filterTitleContainer}>
                    <b>SUITABLE FOR</b>
                    <div className={styles.filterItemImage}>
                      <img
                        alt="arrow-down"
                        src="/vuesaxlineararrowleft-5@2x.png"
                      />
                    </div>
                  </div>

                  <div className={styles.filterSubtitle}>All</div>
                </div>


                <div className={styles.unselectAlll}>Unselect all</div>

                <div className={styles.filterItemOptions}>
                  <div className={styles.checkboxOptionContainer}>
                    <input className={styles.checkboxOption} type="checkbox" />
                    <div className={styles.checkboxOptionTitle}>Men</div>
                  </div>
                  <div className={styles.checkboxOptionContainer}>
                    <input className={styles.checkboxOption} type="checkbox" />
                    <div className={styles.checkboxOptionTitle}>Woman</div>
                  </div>
                  <div className={styles.checkboxOptionContainer}>
                    <input className={styles.checkboxOption} type="checkbox" />
                    <div className={styles.checkboxOptionTitle}>Baby & Kids</div>
                  </div>

                </div>
              </div>

              <div className={styles.seperator11} /> */}


              {/* Filter-12 IDEAL FOR   */}

              {/* {products && products?.slice(0, 2).map((item, index) => ( */}
              {/* {products && products?.map((item, index) => (
                <div key={index}>

                  <div className={styles.filterItemContainer}>
                    <div>
                      <div className={styles.filterTitleContainer}>
                        <b>{item?.category}</b>
                        <div className={styles.filterItemImage}>
                          <img
                            alt="arrow-down"
                            src="/vuesaxlineararrowleft-5@2x.png"
                          />
                        </div>
                      </div>

                      <div className={styles.filterSubtitle}>All</div>
                    </div>


                    <div className={styles.unselectAlll}>Unselect all</div>

                    <div className={styles.filterItemOptions}>

                      <div className={styles.checkboxOptionContainer}>
                        <input className={styles.checkboxOption} type="checkbox" />
                        <div className={styles.checkboxOptionTitle}>Men</div>
                      </div>

                      <div className={styles.checkboxOptionContainer}>
                        <input className={styles.checkboxOption} type="checkbox" />
                        <div className={styles.checkboxOptionTitle}>Woman</div>
                      </div>
                      <div className={styles.checkboxOptionContainer}>
                        <input className={styles.checkboxOption} type="checkbox" />
                        <div className={styles.checkboxOptionTitle}>Baby & Kids</div>
                      </div>

                    </div>
                  </div>

                  <div className={styles.seperator11} />
                </div>

              ))} */}

            </div>

          }

          <div className={styles.productList}>

            <div className={styles.productItems}>
              {products && products.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
            </div>

            {isLoading &&
              <div>
                  <p>Content is loading...</p>
              </div>
            }

          </div>

        </div>

      </main>

    </>
  );
};

export default Filters;


