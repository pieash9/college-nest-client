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
    <>
      <SectionTitle
        Ftitle={"Reviews"}
        Ltitle={"Experiences Shared"}
        subTitle={"Read what others have to say about their experiences"}
      />
      <Swiper
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
          feedbacks.slice(0, 9).map((feedback) => (
            <div key={feedback._id}>
              <SwiperSlide>
                <div className=" text-start grid grid-cols-[1fr,6fr] h-64  gap-4 p-5">
                  <div className="w-20 h-20 flex justify-center items-center">
                    <img
                      className="rounded-full w-40 h-40"
                      src={feedback.candidateImage}
                      alt=""
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <Rating
                      style={{ maxWidth: 100, color: "yellow" }}
                      value={feedback.rating}
                      readOnly
                    />
                    <p className="text-gray-600 text-sm text-justify">
                      {feedback.feedback}
                    </p>
                    <div className="">
                      <p className="text-gray-600 text-sm text-justify">
                        <span className="text-gray-700 font-medium">
                          {feedback.candidateName}{" "}
                        </span>{" "}
                        - Verified user
                      </p>
                      <p className="text-gray-600 text-sm text-justify">
                        <span className="text-gray-700 font-medium">
                          College name:{" "}
                        </span>
                        {feedback.collegeName}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
      </Swiper>
    </>
  );
};

export default Reviews;
