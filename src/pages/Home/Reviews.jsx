import useFeedbackData from "../../hooks/useFeedbackData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles/Reviews.css";
// import required modules
import { Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../components/Title/SectionTitle";

const Reviews = () => {
  const { feedbacks } = useFeedbackData();
  return (
    <div className="lg:px-0 px-3 space-y-10">
      <SectionTitle
        Ftitle={"Reviews"}
        Ltitle={"Experiences Shared"}
        subTitle={"Read what others have to say about their experiences"}
      />
      <Swiper
        breakpoints={{
          // When window width is >= 640px (for mobile)
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // When window width is >= 768px (for larger screens)
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {feedbacks.length > 0 &&
          feedbacks.slice(0, 9).map((feedback, i) => (
            <SwiperSlide
              key={feedback._id}
              className="shadow-md hover:shadow-2xl border border-gray-200"
            >
              <div className=" text-start md:grid md:grid-cols-[1fr,6fr] h-72 md:h-64  gap-4 p-5">
                <div className=" w-10 h-10 md:w-20 md:h-20 flex justify-center items-center">
                  <img
                    className="rounded-full w-40 h-40 mb-5"
                    src={feedback.candidateImage}
                    alt=""
                  />
                </div>
                <div className="w-full space-y-4 ">
                  <Rating
                    style={{ maxWidth: 100, color: "yellow" }}
                    value={feedback.rating}
                    readOnly
                  />
                  <p className="text-gray-600  md:text-sm text-xs text-justify">
                    {feedback.feedback.slice(0, 250)}
                  </p>
                  <div className="">
                    <p className="text-gray-600 text-xs md:text-base text-justify">
                      <span className="text-gray-700 text-xs md:text-base font-medium">
                        {feedback.candidateName}{" "}
                      </span>{" "}
                      - Verified user
                    </p>
                    <p className="text-gray-600 text-sm text-justify">
                      <span className="text-gray-700 font-medium text-xs md:text-sm">
                        College name:{" "}
                      </span>
                      {feedback.collegeName}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
