import { useState, useEffect } from "react";
import styles from "../styles/filters.module.css";
import ProductCard from "./product-card";
import axios from "axios";

const Filters = ({ sData, onFilterSelect }) => {
  const [showToggle, setShowToggle] = useState(false);
  const [showDropToggle, setShowDropToggle] = useState(false);
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(true);

  const fetchData = async () => {
    console.log("im hitting fetch data");
    try {
      setIsLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      const data = res.data;
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getAllCategories = async () => {
    console.log("im hitting all categories");
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(res.data);
    } catch (error) {
      console.log("Some Error occurred while fetching data!", error);
    }
  };

  useEffect(() => {
    fetchData();
    getAllCategories();
  }, []);

  const getSelectedCategory = async () => {
    console.log("im hitting getselected category");
    try {
      setIsLoading(true);
      console.log("selected category =>", selectedCategory);
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${selectedCategory}`
      );
      console.log("res and cat =>", res);
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Some Error occurred while fetching data!", error);
    }
  };

  useEffect(() => {
    getSelectedCategory();
  }, [selectedCategory]);

  const handleShowHideToggle = () => {
    setShowToggle(!showToggle);
  };

  const handleShowDropToggle = () => {
    setShowDropToggle(!showDropToggle);
  };

  console.log("selected cat =>", selectedCategory);

  // "IDEAL FOR",
  const filterCategories = [
    "OCCASSION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <>
      <main className={styles.filterMain}>
        {/* Filter Bar */}
        <div className={styles.filterBar}>
          <div className={styles.filterBarContainer}>
            <div className={styles.filterShowHide}>
              <div className={styles.itemsNumber}>
                <b>{sData?.length || "3211"} ITEMS</b>
              </div>

              <div
                className={styles.showHideToggle}
                onClick={handleShowHideToggle}
              >
                {showToggle ? (
                  <div className={styles.showHide}>
                    <img alt="arrow-right" src="/vuesaxlineararrowleft-8.svg" />
                    <div className={styles.showHideTitle}>SHOW FILTER</div>
                  </div>
                ) : (
                  <div className={styles.showHide}>
                    <img alt="arrow-right" src="/vuesaxlineararrowleft-8.svg" />
                    <div className={styles.showHideTitle}>HIDE FILTER</div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.filterMobile}>
              <b>FILTER</b>
            </div>

            <div className={styles.recommendedParent}>
              <div
                className={styles.recommendedContainer}
                onClick={handleShowDropToggle}
              >
                <div className={styles.recommendedDrop}>
                  <b>recommended</b>
                  <div className={styles.recommendedArrow}>
                    <img alt="arrow-down" src="/vuesaxlineararrowleft@2x.png" />
                  </div>
                </div>

                {showDropToggle && (
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
                    <div className={styles.optionDropMenu}>
                      Price : high to low12
                    </div>
                    <div className={styles.optionDropMenu}>
                      Price : low to high
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Options   */}

        <div className={styles.filterContentParent}>
          {!showToggle && (
            <div className={styles.filterColumn}>
              <div className={styles.checkboxContainerr}>
                <input type="checkbox" />
                <b>Customizble</b>
              </div>

              <div className={styles.seperator} />

              <div className={styles.filterItemContainer}>
                <div className={styles.filterTitleContainer}>
                  <b>{"IDEAL FOR"}</b>
                  <div
                    onClick={() => setShow(!show)}
                    className={styles.filterItemImage}
                  >
                    <img
                      alt="arrow-down"
                      src={
                        !show ? "/icons/arrowdown.svg" : "/icons/arrowup.svg"
                      }
                    />
                  </div>
                </div>

                <div className={styles.filterSubtitle}>All</div>
                <div className={styles.unselectAlll}>Unselect all</div>

                {show && (
                  <div className={styles.filterItemOptions}>
                    {categories &&
                      categories.map((category, index) => (
                        <div
                          key={index}
                          className={styles.checkboxOptionContainer}
                        >
                          <input
                            className={styles.checkboxOption}
                            checked={category === selectedCategory}
                            onChange={() => setSelectedCategory(category)}
                            type="checkbox"
                          />
                          <div className={styles.checkboxOptionTitle}>
                            {category}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>

              {/* Filter-1 IDEAL FOR   */}

              {filterCategories.map((item, index) => (
                <div key={index} className={styles.filterItemContainer}>
                  <div className={styles.filterTitleContainer}>
                    <b>{item || "IDEAL FOR"}</b>
                    <div
                      onClick={() => setShow(!show)}
                      className={styles.filterItemImage}
                    >
                      <img
                        alt="arrow-down"
                        src={
                          !show ? "/icons/arrowdown.svg" : "/icons/arrowup.svg"
                        }
                      />
                    </div>
                  </div>

                  <div className={styles.filterSubtitle}>All</div>
                  <div className={styles.unselectAlll}>Unselect all</div>

                  {/* {show && (
                    <div className={styles.filterItemOptions}>
                      {categories &&
                        categories.map((category, index) => (
                          <div
                            key={index}
                            className={styles.checkboxOptionContainer}
                          >
                            <input
                              className={styles.checkboxOption}
                              checked={category === selectedCategory}
                              onChange={() => setSelectedCategory(category)}
                              type="checkbox"
                            />
                            <div className={styles.checkboxOptionTitle}>
                              {category}
                            </div>
                          </div>
                        ))}
                    </div>
                  )} */}

                </div>
              ))}

              <div className={styles.seperator11} />

              
            </div>
          )}

          <div className={styles.productList}>
            {isLoading ? (
              <div
                style={{ display: "flex", position: "absolute", left: "50%" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#3498db"
                    stroke-width="8"
                    fill="none"
                    stroke-dasharray="251.2"
                    stroke-dashoffset="0"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="251.2"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            ) : (
              <div className={styles.productItems}>
                {products &&
                  products.map((item, index) => (
                    <ProductCard key={index} data={item} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Filters;
