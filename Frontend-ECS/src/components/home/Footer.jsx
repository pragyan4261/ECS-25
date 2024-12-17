import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 text-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">

        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-foot text-base mb-3">QUICK LINKS</h2>
          <ul className="space-y-2 text-base font-rajdhani ">
            <li><a href="#">Resource Hub</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">Annual</a></li>
            <li><a href="#">Attraction</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center mb-6 md:mb-0 -translate-y-[50px]">
          {/* Logo */}
          <div className="mb-[25px]">
            <img
              src="https://i.postimg.cc/zGFN7qZR/Mask-group.png" // Replace with your logo path
              alt="Logo"
              className="h-[114px]"
            />
          </div>

          <h2 className="text-foot text-base mb-3">CONTACT US</h2>
          <p className="text-base font-rajdhani mb-3">Email: ecs.nitsilchar2022@gmail.com</p>

          {/* Social Links */}
          <h2 className="text-foot text-base mb-3 bg-gradient-to-b from-top to-bot bg-clip-text text-transparent">FOLLOW US</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Discord">
              <img
                src="https://i.postimg.cc/90RgnYDn/Discord.png"
                alt="Discord"
                className="h-6 w-6"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="https://i.postimg.cc/2jgC8H73/Facebook.png"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a href="#" aria-label="Mastodon">
              <img
                src="https://i.postimg.cc/mkvpf1M2/Medium.png"
                alt="Medium"
                className="h-6 w-6"
              />
            </a>
            <a href="#" aria-label="Telegram">
              <img
                src="https://i.postimg.cc/Y2vp7cgJ/Telegram.png"
                alt="Telegram"
                className="h-6 w-6"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://i.postimg.cc/Xv4hY5Pr/Twitter.png"
                alt="Twitter"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-foot text-base mb-3">QUICK LINKS</h2>
          <ul className="space-y-2 text-right text-base font-rajdhani">
            <li><a href="#">Members</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
