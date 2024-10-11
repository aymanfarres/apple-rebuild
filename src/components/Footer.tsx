// Footer.jsx

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" pt-[10rem] text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="#" className="mx-4 hover:text-white">Apple TV+ Originals</a>
          <a href="#" className="mx-4 hover:text-white">Watch on Apple Devices</a>
          <a href="#" className="mx-4 hover:text-white">Help</a>
          <a href="#" className="mx-4 hover:text-white">Privacy Policy</a>
          <a href="#" className="mx-4 hover:text-white">Terms of Service</a>
        </div>
        <div className="mb-4">
          <FaFacebookF className="inline mx-2 text-gray-400 hover:text-white" />
          <FaTwitter className="inline mx-2 text-gray-400 hover:text-white" />
          <FaInstagram className="inline mx-2 text-gray-400 hover:text-white" />
          <FaYoutube className="inline mx-2 text-gray-400 hover:text-white" />
        </div>
        <p className="text-gray-600 text-sm">© 2024 Apple Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
