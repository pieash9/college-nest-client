/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useUsersData from "../../hooks/useUsersData";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const EditProfileModal = ({ isOpen, closeModal }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { userData, refetch } = useUsersData();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm(); //form submit using react-hook

  const onSubmit = (data) => {
    setLoading(true);
    const updateData = {
      address: data.address,
      email: data.email,
      name: data.name,
      university: data.university,
    };
    axios
      .patch(`http://localhost:5000/users/${user?.email}`, { ...updateData })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Profile updated");
          refetch();
          closeModal();
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong please try again");
      });
  };
  //className for input
  const inputClassName = `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer`;

  //className for label
  const labelClassName = `peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-sky-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`;

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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                      className=" border p-4 rounded border-gray-300"
                    >
                      <h3 className="text-2xl font-medium text-gray-600 mb-7 ">
                        Edit Profile
                      </h3>
                      {/* Nmae */}
                      <div className="md:flex md:gap-10 gap-5">
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            id="name"
                            className={inputClassName}
                            defaultValue={userData?.name}
                            placeholder=" "
                          />

                          <label htmlFor="name" className={labelClassName}>
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          {errors.name && (
                            <span className="text-red-500 text-sm">
                              Name is required
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Candidate Email */}

                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          {...register("email", {
                            required: true,
                          })}
                          type="email"
                          id="email"
                          className={inputClassName}
                          defaultValue={userData?.email}
                          placeholder=" "
                        />

                        <label htmlFor="email" className={labelClassName}>
                          Email <span className="text-red-500">*</span>
                        </label>
                        {errors.candidateName && (
                          <span className="text-red-500 text-sm">
                            Email is required
                          </span>
                        )}
                      </div>

                      {/* university */}
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          {...register("university", { required: true })}
                          type="text"
                          id="university"
                          className={inputClassName}
                          placeholder=" "
                          defaultValue={userData?.university}
                        />

                        <label htmlFor="university" className={labelClassName}>
                          University <span className="text-red-500">*</span>
                        </label>
                        {errors.university && (
                          <span className="text-red-500 text-sm">
                            University is required
                          </span>
                        )}
                      </div>

                      {/* address */}
                      <div className="relative z-0 w-full group">
                        <input
                          {...register("address", { required: true })}
                          type="text"
                          id="address"
                          className={inputClassName}
                          defaultValue={userData?.address}
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

                      <div className="bg-base-100 rounded">
                        <div className="relative z-0 w-full mb-6 group">
                          <div className=" text-center mt-5">
                            {" "}
                            <button
                              disabled={loading}
                              type="submit"
                              className="button-primary disabled:bg-gray-400 flex items-center"
                            >
                              <span> {loading ? "Saving..." : "Save"} </span>
                              {loading && (
                                <span className="loading loading-spinner loading-sm ml-2"></span>
                              )}
                            </button>
                          </div>
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

export default EditProfileModal;
