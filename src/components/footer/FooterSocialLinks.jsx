import React from "react";

const FooterSocialLinks = ({ socialLinks }) => (
  <div className="flex flex-shrink-0 gap-3">
    {socialLinks.map((social, idx) => (
      <a
        key={idx}
        href="#"
        aria-label={social.label}
        className="flex h-[38px] w-[38px] items-center justify-center rounded-[4px] border border-[#d7dbe3] bg-white text-[rgb(15,23,42)] transition-all duration-300 ease-out hover:rounded-[10px] hover:border-b-[4px] hover:border-[rgb(0,85,254)] hover:text-[rgb(0,85,254)] hover:shadow-[0_6px_14px_rgba(0,85,254,0.16)]"
      >
        <i
          className={`${social.iconClass} text-[14px] leading-none`}
          aria-hidden="true"
        />
      </a>
    ))}
  </div>
);

export default FooterSocialLinks;
