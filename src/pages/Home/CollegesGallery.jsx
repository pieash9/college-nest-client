import img1 from "../../assets/college-graduate/graduate1.jpg";
import img2 from "../../assets/college-graduate/graduate2.jpg";
import img3 from "../../assets/college-graduate/graduate3.jpg";
import img4 from "../../assets/college-graduate/graduate4.jpg";
import img5 from "../../assets/college-graduate/graduate5.jpg";
import img6 from "../../assets/college-graduate/graduate6.jpg";
import SectionTitle from "../../components/Title/SectionTitle";

const CollegesGallery = () => {
  const colleges = [
    {
      collegeImage: img1,
      collegeName: "Greenwood University",
    },
    {
      collegeImage: img2,
      collegeName: "Bluefield College of Engineering",
    },
    {
      collegeImage: img3,
      collegeName: "Sunrise Medical College",
    },
    {
      collegeImage: img4,
      collegeName: "Meadowbrook Arts College",
    },
    {
      collegeImage: img5,
      collegeName: "Harmony Music College",
    },
    {
      collegeImage: img6,
      collegeName: "Greenwood University",
    },
  ];
  return (
    <div>
      <SectionTitle
        Ftitle={"Colleges"}
        Ltitle={"Gallery"}
        subTitle={"Memories Captured: College Graduates' Journey"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative mt-10">
        {colleges.map((college, index) => (
          <div key={index} className="relative">
            <img
              src={college.collegeImage}
              alt={college.collegeName}
              className="h-48 w-full object-cover rounded"
            />
            <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-80  duration-500 hover:bg-black bg-opacity-50 rounded z-10">
              <p className="text-white text-2xl font-semibold text-center">
                {college.collegeName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegesGallery;
