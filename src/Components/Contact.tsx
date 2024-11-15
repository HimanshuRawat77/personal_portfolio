 

import { FormEvent, useRef, useState } from "react";
import { Button, useMatches } from "@mantine/core";
import emailjs from "@emailjs/browser";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import toast from "react-hot-toast";
 

const validateForm = (id: string, value: any) => {
  switch (id) {
    case "name":
      if (!value) return "Name is required";
      if (value.length < 3) return "Name must be at least 3 characters long";
      return "";
    case "email":
      if (!value) return "Email is required";
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(value)) return "Email is invalid";
      return "";
    case "phone":
      if (!value) return "Phone Number is required";
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) return "Phone Number must be 10 digits long";
      return "";
    case "message":
      if (!value) return "Message is required";
      return "";
    default:
      return "";
  }
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const newErrors: { [key: string]: string } = {};
      const fields = ["name", "email", "phone", "message"];

      fields.forEach((field) => {
        const value = formData.get(field);
        const error = validateForm(field, value);
        if (error) {
          newErrors[field] = error;
        }
      });

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        emailjs
          .sendForm(
            "service_xpp12kh", // Your EmailJS Service ID
            "template_3l8md6n", // Your EmailJS Template ID
            form.current,
            "nUu3YX596cfDWMl6n" // Your EmailJS Public Key
          )
          .then(
            (result) => {
              toast.success("Submitted Successfully!", { duration: 4000 });
              form.current?.reset();
              setErrors({});
            },
            (error) => {
              console.log(error.text);
              toast.error("Failed to send message, please try again", {
                duration: 4000,
              });
            }
          );
      } else {
        toast.error("Please correct the errors in the form", { duration: 4000 });
      }
    } else {
      toast.error("Form reference is missing", { duration: 4000 });
    }
  };

  const btn = useMatches({
    xsm: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <div
      className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono"
      id="Contact"
    >
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">&nbsp;</span>Contact
      </h1>
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4"
      >
        <div className="text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
          Let's Connect
          <IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-[70%] lg-mx:w-full m-auto flex flex-col gap-6 sm-mx:p-4"
        >
          <div>
            <input
              type="text"
              name="name"
              className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border ${
                errors.name ? "border-red-500" : "border-textColor"
              } appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border ${
                errors.email ? "border-red-500" : "border-textColor"
              } appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              className={`block px-2.5 pb-2.5 pt-4 w-full text-xl sm-mx:text-lg xs-mx:text-base sm-mx:pb-1 sm-mx:pt-2 rounded-xl text-white bg-transparent border ${
                errors.phone ? "border-red-500" : "border-textColor"
              } appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
              placeholder="Phone Number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <textarea
              name="message"
              rows={4}
              className={`block px-2.5 pb-2.5 xs-mx:text-base pt-4 w-full text-xl sm-mx:text-lg rounded-xl text-white bg-transparent border ${
                errors.message ? "border-red-500" : "border-textColor"
              } appearance-none hover:shadow-[0_0_8px_0_#64FFDA70] focus:shadow-[0_0_8px_0_#64FFDA70] focus:outline-none focus:ring-0 focus:border-primaryColor peer`}
              placeholder="Message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <Button
            fullWidth
            type="submit"
            rightSection={<IconArrowRight size={20} />}
            className="!text-bgColor !font-bold"
            variant="filled"
            size={btn}
            radius="lg"
            color="#64FFDA"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
