import Banner from "./Banner";
import CollegesGallery from "./CollegesGallery";
import PopularColleges from "./PopularColleges";
import ResearchPaper from "./ResearchPaper";

const Home = () => {
  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <PopularColleges />
      <CollegesGallery />
      <ResearchPaper />
    </div>
  );
};

export default Home;
