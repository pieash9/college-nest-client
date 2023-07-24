import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import EditProfileModal from "../../components/Modal/EditProfileModal";
import SectionTitle from "../../components/Title/SectionTitle";
import useUsersData from "../../hooks/useUsersData";
import { AiOutlineEdit } from "react-icons/ai";
const Profile = () => {
  const { userData, isLoading, refetch } = useUsersData();
  const [isOpen, setIsOpen] = useState(false); // Edit profile modal open
  //Edit profile close modal
  const closeModal = () => {
    setIsOpen(false);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-5 mb-10 mx-3 lg:mx-0">
      <SectionTitle
        Ftitle={"Your"}
        Ltitle={"Profile"}
        subTitle={"Manage your info thats work better for you."}
      />
      <div className="mb-5">
        <div className=" text-center">
          <img
            className="mx-auto h-24 w-24 mt-4 rounded-full border-2 shadow-md border-gray-300"
            src={userData.image}
            alt="user image"
          />
          <h3 className="text-gray-600 mt-3 font-medium text-2xl">
            Welcome, {userData.name}
          </h3>
        </div>
        <div className="mt-10 mx-auto p-5 border shadow-md hover:shadow-xl border-gray-300 rounded lg:w-1/2 md:w-3/4 relative">
          <div
            className="tooltip tooltip-bottom absolute right-4 top-4 "
            data-tip="Edit"
          >
            <AiOutlineEdit
              onClick={() => setIsOpen(true)}
              className=" hover:text-orange-500 cursor-pointer text-orange-400 "
              size={30}
            />
          </div>
          {/* Name and email */}
          <div className="flex justify-between items-center mt-7 ">
            <div className="font-medium w-1/2">
              <label className="text-sm text-gray-500" htmlFor="name">
                Name
              </label>
              <p className="text-gray-600 text-lg">{userData.name}</p>
            </div>
            <div className="font-medium w-1/2">
              <label className="text-sm text-gray-500" htmlFor="name">
                Email
              </label>
              <p className="text-gray-600 text-lg">{userData.email}</p>
            </div>
          </div>
          <hr className=" my-4 border-gray-300" />

          {/* university, address */}
          <div className="flex justify-between items-center">
            <div className="font-medium w-1/2">
              <label className="text-sm text-gray-500" htmlFor="name">
                University
              </label>
              <p className="text-gray-600 text-lg">
                {userData?.university ? userData?.university : "No data"}
              </p>
            </div>
            <div className="font-medium w-1/2">
              <label className="text-sm text-gray-500" htmlFor="name">
                Address
              </label>
              <p className="text-gray-600 text-lg">
                {userData?.address ? userData?.address : "No data"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal
        isOpen={isOpen}
        closeModal={closeModal}
        userData={userData}
        refetch={refetch}
      />
    </div>
  );
};

export default Profile;
