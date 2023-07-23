/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const ForgetPasswordModal = ({ isOpen, closeModal }) => {
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm(); //form submit using react-hook

  const onSubmit = (data) => {
    setLoading(true);
    resetPassword(data.email)
      .then(() => {
        reset();
        closeModal();
        setLoading(false);
        toast.success("Please check your email for reset password");
      })
      .catch(() => {
        toast.error("Provide valid email");
        setLoading(false);
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                      <h3 className="text-2xl font-medium text-gray-700 mb-2 px-5">
                        Reset password
                      </h3>
                      <div className="bg-base-100 rounded p-5">
                        {/* email */}
                        <div className="relative z-0 w-full mb-6 group">
                          <input
                            {...register("email", { required: true })}
                            type="email"
                            id="email"
                            className={inputClassName}
                            placeholder=" "
                            autoComplete="off"
                          />

                          <label htmlFor="email" className={labelClassName}>
                            Enter your email{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          {errors.email && (
                            <span className="text-red-500 text-sm">
                              Email is required
                            </span>
                          )}
                          <div className=" text-center mt-5">
                            {" "}
                            <button
                              disabled={loading}
                              type="submit"
                              className="button-primary disabled:bg-gray-400 flex items-center"
                            >
                              <span>
                                {" "}
                                {loading ? "Check your email" : "Reset"}{" "}
                              </span>
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

export default ForgetPasswordModal;
