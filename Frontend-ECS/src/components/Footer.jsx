import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full text-white py-8 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">

        <div className="text-center tablet:text-left mb-6 tablet:mb-0 tablet:ml-[5vw] xl:ml-0">
          <h2 className="text-foot text-base mb-3">QUICK LINKS</h2>
          <ul className="mobile:-translate-x-[20vw] tablet:transform-none top-0 space-y-2 text-base text-left font-rajdhani">
            <li><a href="#" className="hover:text-[#819BE2]">Resource Hub</a></li>
            <li><a href="#" className="hover:text-[#819BE2]">Messages</a></li>
            <li><a href="#" className="hover:text-[#819BE2]">Annual</a></li>
            <li><a href="#" className="hover:text-[#819BE2]">Attraction</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center mb-6 md:mb-0 xl:-translate-y-[50px]">
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
          <div className="flex col gap-2">
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

        <div className="text-center tablet:text-left tablet:mr-[5vw] xl:mr-none">
          <h2 className="mobile:hidden text-foot text-base mb-3 tablet:block">QUICK LINKS</h2>
          <ul className="mobile:absolute tablet:static top-[18.1vw] right-[15vw] space-y-2 text-right text-base font-rajdhani">
            <li><a href="#" className="hover:text-[#819BE2]">Members</a></li>
            <li><a href="#" className="hover:text-[#819BE2]">Gallery</a></li>
            <li><a href="#" className="hover:text-[#819BE2]">About Us</a></li>
            <li><a href="#" className="hover:text-[#819BE2]">FAQs</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
