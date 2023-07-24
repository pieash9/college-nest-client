import Banner from "./Banner";
import CollegesGallery from "./CollegesGallery";
import PopularColleges from "./PopularColleges";
import ResearchPaper from "./ResearchPaper";
import Reviews from "./Reviews";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <Search />
      <div className="space-y-20 mb-20">
        <Banner />
        <PopularColleges />
        <CollegesGallery />
        <ResearchPaper />
        <Reviews />
      </div>
    </>
  );
};

export default Home;
