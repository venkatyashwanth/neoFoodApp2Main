import { Header } from "../../components/Header";
import { Collections } from "../../components/Collections";
import { PopularLocalities } from "../../components/PopularLocalities";
import { ExploreOptions } from "../../components/ExploreOptions";
import { FooterSection } from "../../components/FooterSection";

export const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Collections/>
      </section>
      <section>
        <PopularLocalities/>
      </section>
      <section>
        <ExploreOptions/>
      </section>
      <footer>
        <FooterSection/>
      </footer>
    </>
  );
};
