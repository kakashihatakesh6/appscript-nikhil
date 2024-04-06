import { useState, useEffect } from "react";
import styles from "../styles/filters.module.css";
import ProductCard from "./ProductCard";
import axios from 'axios';


const Filters = ({ sData }) => {
  const [showToggle, setShowToggle] = useState(false);
  const [showDropToggle, setShowDropToggle] = useState(false);
  const [products, setProducts] = useState();

  console.log("filter =>",sData)
  const fetchData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      const data = res.data;
      setProducts(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])





  const handleShowHideToggle = () => {
    setShowToggle(!showToggle);
  }
  const handleShowDropToggle = () => {
    setShowDropToggle(!showDropToggle);
  }




  return (
    <>
      <main className={styles.filterMain}>


        {/* Filter Bar */}
        <div className={styles.filterBar}>

          <div className={styles.filterBarContainer}>

            <div className={styles.filterShowHide}>

              <div className={styles.itemsNumber}>
                <b>3425 ITEMS</b>
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

              <div className={styles.filterItemContainer}>
                <div className={styles.filterTitleContainer}>
                  <b>IDEAL FOR</b>
                  <div className={styles.filterItemImage}>
                    <img
                      alt="arrow-down"
                      src="/vuesaxlineararrowleft-5@2x.png"
                    />
                  </div>
                </div>

                <div className={styles.filterSubtitle}>All</div>
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
                    <div className={styles.checkboxOptionTitle}>Men</div>
                  </div>

                </div>
              </div>

              <div className={styles.seperator11} />


              {/* Filter-11 IDEAL FOR   */}

              <div className={styles.filterItemContainer}>
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
                    <div className={styles.checkboxOptionTitle}>Men</div>
                  </div>

                </div>
              </div>

              <div className={styles.seperator11} />


              {/* Filter-12 IDEAL FOR   */}

              {sData && (sData.slice(0, 2)).map((item, index) => (
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
                        <div className={styles.checkboxOptionTitle}>Men</div>
                      </div>

                    </div>
                  </div>

                  <div className={styles.seperator11} />
                </div>

              ))}



              {/* Filter-2 OCcasion   */}


              {/* <div className={styles.filter2}>

              <div className={styles.title}>
                <div className={styles.name1}>
                  <b className={styles.occasion}>occasion</b>
                  <img
                    className={styles.vuesaxlineararrowLeftIcon1}
                    alt=""
                    src="/vuesaxlineararrowleft@2x.png"
                  />
                </div>
                <div className={styles.all1}>All</div>
              </div>

              <div className={styles.values}>
                <div className={styles.unselectAll1}>Unselect All</div>
                <div className={styles.value1}>
                  <div className={styles.checkbox4} />
                  <div className={styles.rainySeason1}>Rainy Season (1)</div>
                </div>
                <div className={styles.value2}>
                  <div className={styles.checkbox5} />
                  <div className={styles.casual3}>Casual (3)</div>

                </div>
                <div className={styles.value3}>
                  <div className={styles.checkbox6} />
                  <div className={styles.wedding1}>Wedding (1)</div>
                </div>
                <div className={styles.value4}>
                  <div className={styles.checkbox7} />
                  <div className={styles.party10}>Party (10)</div>
                </div>
                <div className={styles.value5}>
                  <div className={styles.checkbox8} />
                  <div className={styles.regular2}>Regular (2)</div>
                </div>
              </div>

            </div>

            <div className={styles.seperator2} /> */}


              {/* Filter-3 OCcasion   */}


              {/* <div className={styles.filter3}>
              <div className={styles.title1}>
                <div className={styles.name2}>
                  <b className={styles.work}>work</b>
                  <img
                    className={styles.vuesaxlineararrowLeftIcon2}
                    alt=""
                    src="/vuesaxlineararrowleft@2x.png"
                  />
                </div>
                <div className={styles.all2}>All</div>
              </div>
              <div className={styles.values1}>
                <div className={styles.unselectAll2}>Unselect All</div>
                <div className={styles.value11}>
                  <div className={styles.checkbox9} />
                  <div className={styles.frenchKnot2}>French Knot (2)</div>
                </div>
                <div className={styles.value21}>
                  <div className={styles.checkbox10} />
                  <div className={styles.zardosi2}>Zardosi (2)</div>
                </div>
                <div className={styles.value31}>
                  <div className={styles.checkbox11} />
                  <div className={styles.fancy1}>Fancy (1)</div>
                </div>
                <div className={styles.value41}>
                  <div className={styles.checkbox12} />
                  <div className={styles.embroidery1}>Embroidery (1)</div>
                </div>
              </div>
            </div> */}

            </div>
          }

          <div className={styles.productList}>
            <div className={styles.productItems}>
              {sData?.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
            </div>
          </div>



        </div>

      </main>

    </>
  );
};

export default Filters;


