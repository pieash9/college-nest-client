/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AdmissionModal = ({ isOpen, closeModal, college, refetch }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const image_hosting_token = import.meta.env.VITE_IBB_KEY;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm(); //form submit using react-hook

  const onSubmit = (data) => {
    setLoading(true);
    const formData = new FormData(); //creating formData for upload image
    formData.append("image", data.image[0]); //getting image data
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgUrl = imgRes.data.display_url;

          const appliedData = {
            collegeId: college._id,
            collegeName: college.collegeName,
            collegeImage: college.collegeImage,
            collegeRating: college.collegeRating,
            numberOfResearch: college.numberOfResearch,
            candidateName: data.candidateName,
            image: imgUrl,
            candidateEmail: data.candidateEmail,
            subject: data.subject,
            phoneNumber: data.phoneNumber,
            dateOfBirth: data.dateOfBirth,
            address: data.address,
            createdAt: new Date(),
          };
          console.log(appliedData);
          axios
            .post(`http://localhost:5000/appliedCollege`, {
              ...appliedData,
            })
            .then((res) => {
              if (res.data) {
                setLoading(false);
                reset();
                refetch({ force: true });
                closeModal();
                toast.success("Application submitted");
              }
            })
            .catch(() => {
              setLoading(false);
              toast.error("Something went wrong");
            });
        }
      });
  };
  //className for input
  const inputClassName = `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer`;

  //className for label
  const labelClassName = `peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`;

  // subject name
  const subjectName = [
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Computer Science Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Aerospace Engineering",
    "Environmental Engineering",
    "Industrial Engineering",
    "Materials Engineering",
    "Software Engineering",
    "Electronics Engineering",
    "Automotive Engineering",
    "Petroleum Engineering",
    "Robotics Engineering",
    "Biotechnology Engineering",
  ];
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="absolute right-4 top-4">
                    <button
                      type="button"
                      className="button-secondary"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>

                  <div className="">
                    {/* form  */}
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      autoComplete="off"
                      className=" border p-4 rounded border-gray-300"
                    >
                      <div className="bg-base-100 rounded p-5">
                        {/* Candidate Name & Subject*/}
                        <div className="md:flex md:gap-10 gap-5">
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("candidateName", { required: true })}
                              type="name"
                              id="candidateName"
                              className={inputClassName}
                              defaultValue={user?.displayName}
                              placeholder=" "
                            />

                            <label
                              htmlFor="candidateName"
                              className={labelClassName}
                            >
                              Candidate name{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            {errors.candidateName && (
                              <span className="text-red-500 text-sm">
                                Name is required
                              </span>
                            )}
                          </div>

                          <div className="relative z-0 w-full mb-6 group flex border-b-2 pb-1 border-gray-300">
                            <select
                              id="subject"
                              className="select focus:outline-none border text-gray-700 font-normal border-gray-300 select-sm w-full mt-3 border-b-2"
                              {...register("subject", { required: true })}
                            >
                              {subjectName.map((subject, i) => (
                                <option
                                  key={i}
                                  value={subject}
                                  className="capitalize text-gray-700"
                                >
                                  {subject}
                                </option>
                              ))}
                            </select>
                            <label htmlFor="subject" className={labelClassName}>
                              Select subject{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            {errors.subject && (
                              <span className="text-red-500 text-sm">
                                Subject is required
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Candidate Email, Candidate Phone number */}
                        <div className="md:flex md:gap-10 gap-5">
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("candidateEmail", {
                                required: true,
                              })}
                              type="email"
                              id="candidateEmail"
                              className={inputClassName}
                              defaultValue={user?.email}
                              placeholder=" "
                            />

                            <label
                              htmlFor="candidateEmail"
                              className={labelClassName}
                            >
                              Email <span className="text-red-500">*</span>
                            </label>
                            {errors.candidateName && (
                              <span className="text-red-500 text-sm">
                                Email is required
                              </span>
                            )}
                          </div>

                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("phoneNumber", { required: true })}
                              type="number"
                              id="phoneNumber"
                              className={inputClassName}
                              placeholder=" "
                              minLength={11}
                            />

                            <label
                              htmlFor="phoneNumber"
                              className={labelClassName}
                            >
                              Phone number{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            {errors.phoneNumber && (
                              <span className="text-red-500 text-sm">
                                Phone number is required
                              </span>
                            )}
                          </div>
                        </div>

                        {/* address, date of birth */}
                        <div className="md:flex md:gap-10 gap-5">
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("address", {
                                required: true,
                              })}
                              type="text"
                              id="address"
                              className={inputClassName}
                              //   defaultValue={product.name}
                              placeholder=" "
                            />

                            <label htmlFor="address" className={labelClassName}>
                              Address <span className="text-red-500">*</span>
                            </label>
                            {errors.address && (
                              <span className="text-red-500 text-sm">
                                Address is required
                              </span>
                            )}
                          </div>

                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("dateOfBirth", { required: true })}
                              type="date"
                              id="dateOfBirth"
                              className={inputClassName}
                              placeholder=" "
                            />

                            <label
                              htmlFor="dateOfBirth"
                              className={labelClassName}
                            >
                              Date of birth{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            {errors.phoneNumber && (
                              <span className="text-red-500 text-sm">
                                Date of birth is required
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Image */}
                        <div className="md:flex md:w-1/2">
                          <div className="relative z-0 w-full mb-6 group">
                            <input
                              {...register("image", { required: true })}
                              type="file"
                              id="image"
                              className={inputClassName}
                              placeholder=" "
                              accept="image/*"
                              required
                            />
                            <label htmlFor="image" className={labelClassName}>
                              Choose Image{" "}
                              <span className="text-red-500">*</span>
                            </label>
                          </div>
                        </div>

                        <div
                          className="mt-2 flex justify-center"
                          //   onClose={closeModal}
                        >
                          <button
                            disabled={loading}
                            type="submit"
                            className="button-primary disabled:bg-gray-400 flex items-center"
                          >
                            <span>
                              {" "}
                              {loading ? "Submitting..." : "Submit"}{" "}
                            </span>
                            {loading && (
                              <span className="loading loading-spinner loading-sm ml-2"></span>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AdmissionModal;
