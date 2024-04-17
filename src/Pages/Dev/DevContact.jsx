import cf from "../../assets/codes/cf.png";
import cc from "../../assets/codes/cc.png";
import hr from "../../assets/codes/hr.png";
import bc from "../../assets/codes/bc.png";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { GoDash } from "react-icons/go";
import { AiOutlineEnter } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const DevContact = () => {
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

  const devEmail = (data, e) => {
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
              backgroundColor: "#3db5ce6a",
              color: "#7FFFD4",
              border: "1px solid #3db5ce8a",
            },
          });

          formRef.current.reset();
        },
        () => {
          toast.error("Failed to dispatch. 😞 Please try again later.", {
            duration: 2000,
            style: {
              fontSize: "14px",
              backgroundColor: "#3db5ce6a",
              color: "#7FFFD4",
              border: "1px solid #3db5ce8a",
            },
          });
        }
      );
  };

  const whatsappClick = () => {
    window.open("https://wa.me/8801314599912", "_blank");
  };

  const gmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=dev.shaid.hasan@gmail.com",
      "_blank",
      "noopener noreferrer"
    );
  };

  const locationClick = () => {
    window.open(
      "https://www.google.com/maps/place/Dattapara+jomidar+house+(%E0%A6%A6%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%AA%E0%A6%BE%E0%A7%9C%E0%A6%BE+%E0%A6%9C%E0%A6%AE%E0%A6%BF%E0%A6%A6%E0%A6%BE%E0%A6%B0+%E0%A6%B9%E0%A6%BE%E0%A6%89%E0%A6%B8)/@23.8730426,90.3162181,914m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3755c3f22bb5cba7:0xc4ea8eeff211e83a!8m2!3d23.8730426!4d90.318793!16s%2Fg%2F11p6p7ngb1?entry=ttu",
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center text-[#f9f9f9] px-4 sm:pl-24 lg:pl-32 xl:pl-40 md:pr-[4%] lg:pr-[6%] w-screen lg:h-screen pb-20 md:pb-28 lg:pb-0">
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full lg:h-screen">
        <form
          className="flex flex-col gap-4 w-full lg:w-3/5"
          ref={formRef}
          onSubmit={handleSubmit(devEmail)}
        >
          <input
            type="email"
            placeholder="E-mail"
            className="text-sm xl:text-base text-[#3db5ce] bg-[#f9f9f91a] focus:outline-none px-6 py-2"
            {...register("from_email", { required: true })}
          />

          <input
            type="text"
            placeholder="Handle"
            className="text-sm xl:text-base text-[#3db5ce] bg-[#f9f9f91a] focus:outline-none px-6 py-2"
            {...register("from_name", { required: true })}
          />

          <textarea
            type="text"
            placeholder="Inquiry"
            style={{ resize: "none", height: "12rem" }}
            className="text-sm xl:text-base text-[#3db5ce] bg-[#f9f9f91a] focus:outline-none px-6 py-2"
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
            className="flex justify-center items-center gap-4 btn text-base text-[#f9f9f9] bg-transparent rounded-none hover:bg-transparent font-normal border-2 border-[#f9f9f9] hover:border-[#3db5ce] hover:text-[#3db5ce] duration-300 px-10 py-2"
          >
            Dispatch
          </button>
        </form>

        <div className="flex flex-col md:flex-row-reverse lg:flex-col-reverse gap-10 md:gap-20 lg:pl-4 xl:pl-12 mt-10 lg:mt-0">
          <div className="flex">
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <FaWhatsapp />
                <span
                  className="text-xs lg:text-xs xl:text-sm hover:text-[#3db5ce] duration-300 cursor-pointer"
                  onClick={whatsappClick}
                >
                  +880 1314-599912
                </span>
              </p>

              <p className="flex items-center gap-2">
                <IoMailOutline />
                <span
                  className="text-xs lg:text-xs xl:text-sm hover:text-[#3db5ce] duration-300 cursor-pointer"
                  onClick={gmailClick}
                >
                  dev.shaid.hasan@gmail.com
                </span>
              </p>

              <p className="flex gap-2">
                <GrLocation />
                <span
                  className="text-xs lg:text-xs xl:text-sm hover:text-[#3db5ce] duration-300 cursor-pointer"
                  onClick={locationClick}
                >
                  Birulia, Savar, Dhaka-1216, Bangladesh
                </span>
              </p>
            </div>
          </div>

          <div>
            <div>
              <p className="flex gap-2 text-sm lg:text-[15px] xl:text-lg">
                <GoDash /> Kudos for reaching this far!
              </p>
            </div>

            <div className="flex gap-10 pl-1.5 mt-4">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="h-4"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute left-[5%] md:left-[12%] lg:left-[12.5%] xl:left-[10%] bottom-2 md:bottom-4 text-xs">
          <p className="text-[#3db5ce] opacity-40">
            Copyright © 2024 - All right reserved
          </p>
        </div>

        <Toaster />
      </div>
    </div>
  );
};

export default DevContact;
