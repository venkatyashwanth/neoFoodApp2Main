import "./index.css";

export const ExploreOptions = () => {
  return (
    <>
      <div className="exploreOptionSection">
        <h2>Explore options near me</h2>
        {/* <div> */}
          <div className="accordion mt-5" id="accordionExample">
            {/* accordian 1*/}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Popular cuisines near me
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Bakery food near me . Beverages food near me . Biryani food
                    near me . Burger food near me . Chinese food near me .
                    Desserts food near me . Ice Cream food near me . Kebab food
                    near me . Maharashtrian food near me . Momos food near me .
                    Mughlai food near me . North Indian food near me . Pizza
                    food near me . Rolls food near me . Sandwich food near me .
                    Seafood food near me . Shake food near me . Sichuan food
                    near me . South Indian food near me . Street food near me
                  </p>
                </div>
              </div>
            </div>

            {/* accordian 2*/}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Popular restaurant types near me  
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse hide"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Bakery food near me . Beverages food near me . Biryani food
                    near me . Burger food near me . Chinese food near me .
                    Desserts food near me . Ice Cream food near me . Kebab food
                    near me . Maharashtrian food near me . Momos food near me .
                    Mughlai food near me . North Indian food near me . Pizza
                    food near me . Rolls food near me . Sandwich food near me .
                    Seafood food near me . Shake food near me . Sichuan food
                    near me . South Indian food near me . Street food near me
                  </p>
                </div>
              </div>
            </div>

            {/* accordian 3*/}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  Top restaurant chains
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse hide"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Bakery food near me . Beverages food near me . Biryani food
                    near me . Burger food near me . Chinese food near me .
                    Desserts food near me . Ice Cream food near me . Kebab food
                    near me . Maharashtrian food near me . Momos food near me .
                    Mughlai food near me . North Indian food near me . Pizza
                    food near me . Rolls food near me . Sandwich food near me .
                    Seafood food near me . Shake food near me . Sichuan food
                    near me . South Indian food near me . Street food near me
                  </p>
                </div>
              </div>
            </div>

            {/* accordian 4*/}
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  Cities we deliver to
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse hide"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    Bakery food near me . Beverages food near me . Biryani food
                    near me . Burger food near me . Chinese food near me .
                    Desserts food near me . Ice Cream food near me . Kebab food
                    near me . Maharashtrian food near me . Momos food near me .
                    Mughlai food near me . North Indian food near me . Pizza
                    food near me . Rolls food near me . Sandwich food near me .
                    Seafood food near me . Shake food near me . Sichuan food
                    near me . South Indian food near me . Street food near me
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};
