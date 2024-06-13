import React from "react";
import { useForm } from "react-hook-form";

const Sign = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="w-10/12 py-6 flex flex-col">
            <h1 className="font-extrabold text-2xl font-serif text-center underline">
              Sign Up Form
            </h1>
            <div className="p-4 m-2">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="floating_first_name"
                    className="font-serif font-semibold"
                  >
                    Enter FirstName
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="FirstName"
                    {...register("firstname", { required: true })}
                  />
                  {errors.firstname && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="floating_last_name"
                    className="font-serif font-semibold"
                  >
                    Enter LastName
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="LastName"
                    {...register("lastname", { required: true })}
                  />
                  {errors.lastname && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="floating_email" className="font-serif font-semibold">
                    Enter Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Email_id"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="floating_password" className="font-serif font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="floating_phone" className="font-serif font-semibold">
                    Enter Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phonenumber"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Phone Number"
                    {...register("phonenumber", { required: true })}
                  />
                  {errors.phonenumber && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="floating_company" className="font-serif font-semibold">
                    Enter Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Enter Company Name"
                    {...register("company", { required: true })}
                  />
                  {errors.company && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="post" className="font-serif font-semibold">
                  Working Position
                </label>
                <input
                  type="text"
                  name="post"
                  id="post"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Responsibility"
                  {...register("post", { required: true })}
                />
                {errors.post && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label htmlFor="link" className="font-serif font-semibold">
                  LinkedIn Profile:
                </label>
                <input
                  type="url"
                  name="link"
                  id="link"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="LinkedIn Profile"
                  {...register("link", { required: true })}
                />
                {errors.link && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="batch" className="font-serif font-semibold">
                    Enter Batch Number:
                  </label>
                  <input
                    type="text"
                    name="batch"
                    id="batch"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Batch Number"
                    {...register("batch", { required: true })}
                  />
                  {errors.batch && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="photo" className="font-serif font-semibold">
                    Choose a Profile Picture:
                  </label>
                  <br />
                  <input
                    type="file"
                    id="photo"
                    accept="image/jpeg, image/png"
                    name="photo"
                    {...register("photo")}
                  />
                  {errors.photo && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Sign;
