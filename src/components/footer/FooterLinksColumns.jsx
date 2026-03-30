import React from "react";

const FooterLinksColumns = ({ groups, footerLinkClass, isArabic }) => (
  <>
    {groups.map((group, groupIndex) => (
      <div
        key={groupIndex}
        className={`flex flex-col gap-[10px] ${isArabic ? "text-right" : ""}`}
      >
        {group.map((link, idx) => (
          <a key={idx} href="#" className={footerLinkClass}>
            {link}
          </a>
        ))}
      </div>
    ))}
  </>
);

export default FooterLinksColumns;
