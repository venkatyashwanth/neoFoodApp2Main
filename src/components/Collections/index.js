import { Container, Row} from "react-bootstrap";
import "./index.css";
import { AiOutlineCaretRight } from "react-icons/ai";

export const Collections = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <section className="cardsSection">
            <div className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between align-items-lg-stretch">
              <div className="csCartItem shadow">
                <img src="./media/Order_Online.png" alt="order" />
                <div>
                  <h4>Order Online</h4>
                  <p>Stay home and order to your doorstep</p>
                </div>
              </div>

              <div className="csCartItem shadow">
                <img src="./media/Dining.png" alt="order" />
                <div>
                  <h4>Dining</h4>
                  <p>View the city’s favourite dining venues</p>
                </div>
              </div>

              <div className="csCartItem csCartItemEnd shadow">
                <img src="./media/nightlife.png" alt="order" />
                <div>
                  <h4>Nightlife and Clubs</h4>
                  <p>Explore the city’s top nightlife outlets</p>
                </div>
              </div>
            </div>
          </section>
        </Row>
        <Row>
          <div className="collectionsSection">
            <h2>Collections</h2>
            <div className="d-flex flex-column d-flex flex-lg-row justify-content-between textStylingOne">
              <p>
                Explore curated lists of top restaurants, cafes, pubs, and bars
                in Mumbai, based on trends
              </p>
              <div className="d-flex align-items-center">
                <p>
                  All Collections in Mumbai <AiOutlineCaretRight />
                </p>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <section className="cardsCollectionContainer d-flex flex-column flex-lg-row justify-content-lg-between">
            <div className="collectionCard">
              <img src="./media/newlyOpened.png" alt="newlyOpen" />
              <div>
                <h5>Newly Opened</h5>
                <p>34 Places <AiOutlineCaretRight /></p>
              </div>
            </div>
            <div className="collectionCard">
              <img src="./media/gateway.png" alt="newlyOpen" />
              <div>
                <h5>Best Of Mumbai</h5>
                <p>139 Places <AiOutlineCaretRight /></p>
              </div>
            </div>
            <div className="collectionCard">
              <img src="./media/trendingWeek.png" alt="newlyOpen" />
              <div>
                <h5>Trending This Week</h5>
                <p>25 Places <AiOutlineCaretRight /></p>
              </div>
            </div>
            <div className="collectionCard">
              <img src="./media/workFriendly.png" alt="newlyOpen" />
              <div>
                <h5>Work Friendly Places!</h5>
                <p>25 Places <AiOutlineCaretRight /></p>
              </div>
            </div>
          </section>
        </Row>
      </Container>
    </>
  );
};
