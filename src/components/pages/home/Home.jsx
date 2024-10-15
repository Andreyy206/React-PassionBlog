import Header from "@/components/partials/Header";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HomeBanner from "./HomeBanner";
import HomeTrending from "./HomeTrending";
import HomeSticky from "./HomeSticky";
import HomeVideo from "./HomeVideo";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <HomeTrending />
      <HomeSticky />
    </>
  );
};

export default Home;
