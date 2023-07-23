import Banner from "./Banner";
import CollegesGallery from "./CollegesGallery";
import PopularColleges from "./PopularColleges";
import ResearchPaper from "./ResearchPaper";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <PopularColleges />
      <CollegesGallery />
      <ResearchPaper />
      <Reviews />
    </div>
  );
};

export default Home;
