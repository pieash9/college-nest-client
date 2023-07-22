import Banner from "./Banner";
import CollegesGallery from "./CollegesGallery";
import PopularColleges from "./PopularColleges";

const Home = () => {
  return (
    <div className="space-y-16 mb-16">
      <Banner />
      <PopularColleges />
      <CollegesGallery/>
    </div>
  );
};

export default Home;
