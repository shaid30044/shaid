import Title from "../Components/Title";
import cf from "../assets/codes/cf.png";
import cc from "../assets/codes/cc.png";
import hr from "../assets/codes/hr.png";
import bc from "../assets/codes/bc.png";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { GoDash } from "react-icons/go";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

const ContactMe = ({ darkMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef();

  const platforms = [
    {
      name: "CodeForces",
      image: cf,
      url: "https://codeforces.com/profile/shaid99912",
    },
    {
      name: "CodeChef",
      image: cc,
      url: "https://www.codechef.com/users/shaid99912",
    },
    {
      name: "HackerRank",
      image: hr,
      url: "https://www.hackerrank.com/profile/shaid30044",
    },
    {
      name: "BeeCrowd",
      image: bc,
      url: "https://judge.beecrowd.com/en/profile/951360",
    },
  ];

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4rcp8pc", "template_bf8a8ma", formRef.current, {
        publicKey: "Z_dPLiRT6AAE4gXBb",
      })
      .then(
        () => {
          toast.success("Inquiry dispatch! 🚀 Please check your inbox.", {
            duration: 2000,
            style: {
              fontSize: "14px",
              backgroundColor: darkMode ? "#34353a" : "#f9f9f9",
              color: darkMode ? "#f9f9f9" : "#34353a",
              border: darkMode ? "1px solid #f9f9f94a" : "1px solid #34353a4a",
            },
          });

          formRef.current.reset();
        },
        () => {
          toast.error("Failed to dispatch. 😞 Please try again later.", {
            duration: 2000,
            style: {
              fontSize: "14px",
              backgroundColor: darkMode ? "#34353a" : "#f9f9f9",
              color: darkMode ? "#f9f9f9" : "#34353a",
              border: darkMode ? "1px solid #f9f9f94a" : "1px solid #34353a4a",
            },
          });
        }
      );
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/8801314599912", "_blank");
  };

  const handleGmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=dev.shaid.hasan@gmail.com",
      "_blank",
      "noopener noreferrer"
    );
  };

  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/place/Dattapara+jomidar+house+(%E0%A6%A6%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%AA%E0%A6%BE%E0%A7%9C%E0%A6%BE+%E0%A6%9C%E0%A6%AE%E0%A6%BF%E0%A6%A6%E0%A6%BE%E0%A6%B0+%E0%A6%B9%E0%A6%BE%E0%A6%89%E0%A6%B8)/@23.8730426,90.3162181,914m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755c3f22bb5cba7:0xc4ea8eeff211e83a!8m2!3d23.8730426!4d90.318793!16s%2Fg%2F11p6p7ngb1?entry=ttu",
      "_blank"
    );
  };

  return (
    <div className="relative flex flex-col md:pt-[68px] xl:h-screen">
      <Title title={"< Reach Out />"} />

      <form
        className="flex flex-col gap-4 mt-12 w-full"
        ref={formRef}
        onSubmit={handleSubmit(sendEmail)}
      >
        <input
          type="email"
          placeholder="E-mail"
          className={
            darkMode
              ? "text-sm xl:text-base bg-[#f9f9f91a] focus:outline-none px-6 py-2"
              : "text-sm xl:text-base bg-[#34353a1a] focus:outline-none px-6 py-2"
          }
          {...register("from_email", { required: true })}
        />

        <input
          type="text"
          placeholder="Handle"
          className={
            darkMode
              ? "text-sm xl:text-base bg-[#f9f9f91a] focus:outline-none px-6 py-2"
              : "text-sm xl:text-base bg-[#34353a1a] focus:outline-none px-6 py-2"
          }
          {...register("from_name", { required: true })}
        />

        <textarea
          type="text"
          placeholder="Inquiry"
          style={{ resize: "none", height: "12rem" }}
          className={
            darkMode
              ? "text-sm xl:text-base bg-[#f9f9f91a] focus:outline-none px-6 py-2"
              : "text-sm xl:text-base bg-[#34353a1a] focus:outline-none px-6 py-2"
          }
          {...register("message", { required: true, maxLength: 100 })}
        />
        {(errors.from_email || errors.from_name || errors.message) && (
          <span className="text-xs lg:text-sm">
            Oops! Looks like something&apos;s missing! 🧐 Please fill out the
            entire form! 📝
          </span>
        )}

        <button
          type="submit"
          className={
            darkMode
              ? "flex justify-center items-center gap-4 btn text-base bg-transparent rounded-none hover:bg-transparent font-normal border-2 border-[#f9f9f98a] hover:border-[#f9f9f9] hover:text-[#f9f9f9] duration-300 px-10 py-2"
              : "flex justify-center items-center gap-4 btn text-base bg-transparent rounded-none hover:bg-transparent font-normal border-2 border-[#34353a8a] hover:border-[#34353a] hover:text-[#34353a] duration-300 px-10 py-2"
          }
        >
          Dispatch
        </button>
      </form>

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-10 mt-10 md:mt-20 mb-20">
        <div>
          <div>
            <p className="flex items-center gap-2 lg:text-xl">
              <GoDash /> Kudos for reaching this far!
            </p>
          </div>

          <div className="flex gap-10 pl-1 mt-4">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={platform.image} alt={platform.name} className="h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex order-first md:order-none">
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <FaWhatsapp />
              <span
                className="text-xs md:text-sm cursor-pointer"
                onClick={handleWhatsappClick}
              >
                +880 1314-599912
              </span>
            </p>

            <p className="flex items-center gap-2">
              <IoMailOutline />
              <span
                className="text-xs md:text-sm cursor-pointer"
                onClick={handleGmailClick}
              >
                dev.shaid.hasan@gmail.com
              </span>
            </p>

            <p className="flex items-center gap-2">
              <GrLocation />
              <span
                className="text-xs md:text-sm cursor-pointer"
                onClick={handleLocationClick}
              >
                Birulia, Savar, Dhaka-1216, Bangladesh
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 md:bottom-6 text-xs">
        <p className={darkMode ? "opacity-20" : "opacity-40"}>
          Copyright © 2024 - All right reserved
        </p>
      </div>

      <Toaster />
    </div>
  );
};

ContactMe.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default ContactMe;
