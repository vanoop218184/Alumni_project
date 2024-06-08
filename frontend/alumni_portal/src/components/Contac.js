import React from "react";
import { useForm } from "react-hook-form";
import Card from "./Card";
import img1 from "./images/agni_mitra_viswas.jpg";
import img2 from "./images/director.jpeg";
import img3 from "./images/birndra_bhaumik.jpeg";
const s1 = "Dean, Alumni Relations";
const s2 = "Dean, Academic";
const s3 = "Director, NIT Silchar";
const s11 = "Dr. Agnimitra Biswas";
const s22 = "Prof. Brindra Bhowmick";
const s33 = " Prof. Dilip Kumar Baidya";
const s111 = "http://me.nits.ac.in/dr-a-biswas/";
const s222 = "http://ec.nits.ac.in/brinda/";
const s333 = "http://www.nits.ac.in/administration/director.php";

const Contac = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => console.log(data);
  return (
    <>
      <h1 className="  text-6xl text-center text-orange-600 m-8 font-semibold font-serif ">
        Contact Us
      </h1>
      <div className="flex h-auto items-center justify-center">
        <div
          id=" my_modal_3"
          className=" w-[600px]  flex items-center justify-center"
        >
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h1 className="font-semibold text-3xl ">Contact Us</h1>
              <div className="mt-4  space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeHolder="Enter your FullName"
                  className=" py-1 w-full px-3 border rounded-md outline-none"
                  {...register("name", { required: true })}
                ></input>
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4  space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeHolder="Enter your Email"
                  className=" py-1 w-full px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                ></input>
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-3  space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  type="message"
                  placeHolder="Type Your Message"
                  className="p-[10px] w-full h-20 block text-sm "
                  {...register("message", { required: true })}
                ></textarea>
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <button className="mt-4 btn btn-active btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-around m-1 my-0 sm:flex-row">
          <Card img={img1} pos={s1} name={s11} link={s111} more={s111} />
          <Card img={img2} pos={s3} name={s33} link={s333} more={s333} />
          <Card img={img3} pos={s2} name={s22} link={s222} more={s222} />
        </div>
      </div>
    </>
  );
};

export default Contac;
