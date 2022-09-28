import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { BsSearch } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <Container fluid>
        <Row className="HeaderBackground">
          <Col xs={12} className="HeroContent">
            <div className="HeroTitle d-flex align-items-baseline m-auto">
              <img src="./media/foodCont.png" alt="container" style={{}} />
              <h1 className="ms-auto">
                NOM-<span className="textDesign">NOM</span>
              </h1>
            </div>
            <div>
              <h2>Discover the best food &#x26; drinks in Mumbai</h2>
              <div className="searchContainer d-flex flex-column align-items-start  flex-md-row align-items-md-center">
                <div className="d-flex align-items-center">
                  <div>
                    <span>
                      <img
                        src="./media/mapMarker.png"
                        alt="marker"
                        style={{ width: "20px", marginRight: "10px" }}
                      />
                    </span>
                  </div>
                  <div className="selectBox">
                    <select
                      aria-label="Default select example"
                      className="text-dark"
                    >
                      <option value="Mumbai" className="text-dark" defaultValue>
                        Mumbai
                      </option>
                      <option value="Pune" className="text-dark">
                        Pune
                      </option>
                      <option value="Banglore" className="text-dark">
                        Banglore
                      </option>
                      <option value="Hyderabad" className="text-dark">
                        Hyderabad
                      </option>
                    </select>
                  </div>
                </div>

                <div className="searchBarBox w-100">
                  <div className="d-flex align-items-center">
                    <i>
                      <BsSearch size={24} />
                    </i>
                    <input
                      className="form-control border-0"
                      type="search"
                      placeholder="Search for restaurant, cuisine or a dish"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
