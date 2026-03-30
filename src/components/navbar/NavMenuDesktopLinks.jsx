import { ChevronRight } from "lucide-react";

const NavMenuDesktopLinks = ({
  language,
  isArabic,
  labels,
  categories,
  categorySubmenus,
  resources,
  resourceSubmenus,
  menuItemClasses,
  arrowClasses,
  arabicEventsStyle,
}) => {
  return (
    <div
      className={`hidden items-center gap-6 lg:flex ${
        language === "AR" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="group relative">
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700 transition-colors group-hover:text-[#0b56ff]"
          href="#"
        >
          {labels.categories}
        </a>
        <div
          className={`invisible absolute top-full z-50 mt-2 w-64 translate-y-2 rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-[0_20px_40px_-18px_rgba(15,23,42,0.35)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
            isArabic ? "right-0" : "left-0"
          }`}
        >
          {categories.map((item) => {
            const subs = categorySubmenus[item] || [];
            return (
              <div key={item} className="group/sub relative">
                <a
                  href="#"
                  className={`${menuItemClasses} ${isArabic ? "text-right" : ""}`}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  <span dir={isArabic ? "rtl" : "ltr"}>{item}</span>
                  <ChevronRight
                    className={`${arrowClasses} ${isArabic ? "rotate-180" : ""}`}
                    strokeWidth={2.4}
                  />
                </a>
                {subs.length > 0 && (
                  <div
                    className={`invisible absolute top-0 z-50 w-56 rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-[0_20px_40px_-18px_rgba(15,23,42,0.35)] transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100 ${
                      isArabic ? "right-full mr-1" : "left-full ml-1"
                    }`}
                  >
                    {subs.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className={`${menuItemClasses} ${isArabic ? "text-right" : ""}`}
                        dir={isArabic ? "rtl" : "ltr"}
                      >
                        <span>{sub}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <a className="text-sm font-medium tracking-wide uppercase text-slate-700" href="#">
        {labels.products}
      </a>

      <a className="text-sm font-medium tracking-wide uppercase text-slate-700" href="#">
        {labels.vendors}
      </a>

      <a className="text-sm font-medium tracking-wide uppercase text-slate-700" href="#">
        {labels.advisoryServices}
      </a>

      <div className="group relative">
        <a
          className="text-sm font-medium tracking-wide uppercase text-slate-700 transition-colors group-hover:text-[#0b56ff]"
          href="#"
        >
          {labels.resources}
        </a>
        <div
          className={`invisible absolute top-full z-50 mt-2 w-48 translate-y-2 rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-[0_20px_40px_-18px_rgba(15,23,42,0.35)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
            isArabic ? "right-0" : "left-0"
          }`}
        >
          {resources.map((item) => {
            const subs = resourceSubmenus[item] || [];
            return (
              <div key={item} className="group/sub relative">
                <a
                  href="#"
                  className={`${menuItemClasses} ${isArabic ? "text-right" : ""}`}
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  <span>{item}</span>
                  <ChevronRight
                    className={`${arrowClasses} ${isArabic ? "rotate-180" : ""}`}
                    strokeWidth={2.4}
                  />
                </a>
                {subs.length > 0 && (
                  <div
                    className={`invisible absolute top-0 z-50 w-56 rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-[0_20px_40px_-18px_rgba(15,23,42,0.35)] transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100 ${
                      isArabic ? "right-full mr-1" : "left-full ml-1"
                    }`}
                  >
                    {subs.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className={`${menuItemClasses} ${isArabic ? "text-right" : ""}`}
                        dir={isArabic ? "rtl" : "ltr"}
                      >
                        <span>{sub}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <a
        className="text-sm font-medium tracking-wide uppercase text-slate-700"
        href="#"
        style={language === "AR" ? arabicEventsStyle : undefined}
      >
        {labels.events}
      </a>

      <a className="text-sm font-medium tracking-wide uppercase text-slate-700" href="#">
        {labels.contactUs}
      </a>
    </div>
  );
};

export default NavMenuDesktopLinks;
