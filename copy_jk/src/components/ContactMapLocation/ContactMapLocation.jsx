import React from "react";

const ContactMapLocation = () => {
  return (
    <div className="w-[100%] flex flex-col lg:flex lg:flex-row lg:gap-8 lg:justify-center mb-3 lg:p-0 p-5">
      {/* map location */}
      <div className="basis-[45%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000623.759652719!2d-75.770041!3d42.74622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1727409703412!5m2!1sen!2sbd"
          className="w-[100%] lg:h-[100%] h-[35rem] rounded-md"
          title="Company Location"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="basis-[45%] mt-7 lg:mt-0">
        <p>
          The contact form is currently inactive. Get a functional and working
          contact form with Ajax & PHP in a few minutes. Just copy and paste the
          files, add a little code and you're done. Download Now.
        </p>
        {/* --------- form section */}
        <form className="w-[100%] ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className="w-[100%] outline-none border border-[#00B98E] p-3 rounded-md mt-2 "
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            className="w-[100%] outline-none border border-[#00B98E] p-3 rounded-md mt-2"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            className="w-[100%] outline-none border border-[#00B98E] p-3 rounded-md mt-2"
          />
          <textarea
            name=""
            id=""
            rows={10}
            cols={10}
            placeholder="Message"
            className="w-[100%] outline-none border border-[#00B98E] p-3 rounded-md mt-2"
          ></textarea>
          <button
            type="button"
            className="w-[100%] outline-none border border-[#00B98E] p-3 rounded-md mt-2 bg-[#00B98E] text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMapLocation;
