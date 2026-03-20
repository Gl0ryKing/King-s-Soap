import {FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#C5AE98] py-5 px-8">
      <div className="flex items-start justify-start flex-wrap gap-4 h-20">
        <h2 className=" text-black text-5xl font-semibold">Contact Us: </h2>
      </div>

      <div className="flex items-center justify-end flex-wrap gap-4 font-semibold">
        <div className="flex items-center gap-8 flex-wrap text-black">
          <div className="flex items-center gap-2 ">
            <FaMapMarkerAlt className="text-3xl" />
            <span className="text-lg">Sacramento, CA</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-3xl" />
            <span className="text-lg">kinganita25@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-3xl" />
            <span className="text-lg">916.640.6007</span>
          </div>

          <div className="flex items-center gap-2">
            <FaInstagram className="text-3xl" />
            <span className="text-lg">@kingssoap</span>
          </div>
          

        </div>
      </div>
    </footer>
  );
}

export default Footer;