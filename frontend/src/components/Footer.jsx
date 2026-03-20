import {FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#C5AE98] py-15 px-8">
      <div className="flex items-center justify-context flex-wrap gap-4">
        <h2 className=" text-black text-3xl font-semibold">Contact Us: </h2>

        <div className="flex items-center gap-8 flex-wrap text-black">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-2xl" />
            <span className="text-sm">Sacramento, CA</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-2xl" />
            <span className="text-sm">kinganita25@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-2xl" />
            <span className="text-sm">916.640.6007</span>
          </div>
          

        </div>
      </div>
    </footer>
  );
}

export default Footer;