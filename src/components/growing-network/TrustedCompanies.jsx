import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";

const QuoteIcon = () => (
  <img src={quoteIcon} alt="Quote Icon" className="h-[20px] w-[20px] object-contain" />
);

const TestimonialCard = ({ quote, author, title, company, isArabic = false }) => {
  return (
    <div className="mx-auto mb-16 flex w-full max-w-[440px] flex-col lg:mb-0 lg:w-[31%] lg:max-w-none">
      <div
        className="relative h-fit w-full rounded-bl-[100px] border-b-[4px] border-l-[3px] border-[#1fc04f] pb-14 pl-[45.5px] pr-6 pt-12"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="absolute left-0 top-0 h-[3px] w-[35px] bg-[#1fc04f]" />

        <div className="absolute -top-[20px] left-[30px] z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#1fc04f]">
          <QuoteIcon />
        </div>

        <div className="absolute bottom-[20px] right-[20px] z-0 h-[60px] w-[1px] bg-[#e5e7eb]" />

        <div className="absolute -bottom-[20px] right-0 z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#1fc04f]">
          <QuoteIcon />
        </div>

        <p
          className={`mb-6 w-full flex-grow text-[14px] font-normal leading-[22px] text-[#242424] ${
            isArabic ? "text-right" : "text-left"
          }`}
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          {quote}
        </p>

        <div
          className={`flex w-full flex-col ${
            isArabic ? "items-end text-right" : "items-start text-left"
          }`}
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          <div className="w-full text-[16px] font-medium leading-[24px] text-[#242424]">{author}</div>
          <div className="w-full text-[14px] font-normal leading-[21px] text-[#242424]">{title}</div>
          <div className="w-full text-[14px] font-medium leading-[21px] text-[#242424]">{company}</div>
        </div>
      </div>
    </div>
  );
};

const slidesData = [
  [
    {
      quote:
        "Excited to be a part of a new digital initiative by ExploreTECH. It is a great resource for Hospitality Industry. It is inimitable. Buyers or Suppliers can now find all the information under one single platform for Technology.",
      author: "Amit Sharda",
      title: "Chief Operating Officer",
      company: "Prologic First",
    },
    {
      quote:
        "D-EDGE is excited and proud to be a founding partner of the new ExploreTECH platform - not only because the Middle East is a very important market for D-EDGE but also because the platform is well thought through and will give all Hoteliers a great overview on what's out there",
      author: "Heinrich Kessler",
      title: "Chief Commercial Officer",
      company: "D-EDGE",
    },
    {
      quote:
        "Our partnership with ExploreTECH aims to provide hoteliers with the industry's number one hotel technology solutions (Rate Shopping & Market Intelligence Tool, Parity Management Software, and Business Intelligence Software), so they can leverage our data and insights for business success. We look forward to empowering hoteliers to make smarter revenue, distribution and marketing decisions through this collaboration with ExploreTECH.",
      author: "Nora Galfi",
      title: "EMEA Marketing Manager",
      company: "Lighthouse",
    },
  ],
  [
    {
      quote:
        "We're excited to work with ExploreTECH to help bring the latest hospitality cloud technology to the Middle East. As a global leader in modern PMS platforms and guest-centric technology, we share ExploreTECH's commitment to promoting innovation in the hospitality industry and helping hotels drive revenue, streamline operations, and elevate the guest experience.",
      author: "Jeff Down",
      title: "Head of Sales - EMEA",
      company: "Stayntouch",
    },
    {
      quote:
        "We are very excited about our business partnership with ExploreTech. We believe this partnership will be another important milestone in our Journey and we will achieve lots of success together.",
      author: "Adel Abdel Masih",
      title: "Founder",
      company: "Sita Egypt",
    },
    {
      quote:
        "We're delighted to partner with ExploreTECH, a recognized leader in the field. This collaboration allows us to extend our reach and offer our solutions to a wider audience.",
      author: "Mrigank Devam",
      title: "Founding CEO",
      company: "Viralops",
    },
  ],
  [
    {
      quote:
        "We are very excited about our business partnership with ExploreTech. We believe this partnership will be another important milestone in our Journey and we will achieve lots of success together.",
      author: "Adel Abdel Masih",
      title: "Founder",
      company: "Sita Egypt",
    },
    {
      quote:
        "We're delighted to partner with ExploreTECH, a recognized leader in the field. This collaboration allows us to extend our reach and offer our solutions to a wider audience.",
      author: "Mrigank Devam",
      title: "Founding CEO",
      company: "Viralops",
    },
    {
      quote:
        "We are excited to join forces with ExploreTECH and look forward to collaborating with industry professionals who are passionate about innovation and digital transformation.",
      author: "Nikkie-Randhawa Singh",
      title: "Senior Vice President APAC & Middle East",
      company: "Shiji",
    },
  ],
];

const arabicCards = [
  {
    quote:
      "تهدف شراكتنا مع إكسبلورتك إلى تزويد أصحاب الفنادق بالحلول التكنولوجية الفندقية الرائدة في الصناعة (أداة التسعير والتسوق الذكي، وبرامج إدارة التكافؤ، وبرامج ذكاء الأعمال)، حتى يتمكنوا من الاستفادة من بياناتنا وإحصاءاتنا لتحقيق نجاح أكبر. نتطلع إلى تمكين أصحاب الفنادق من اتخاذ قرارات أكثر ذكاءً بشأن الإيرادات والتوزيع والتسويق من خلال هذا التعاون مع إكسبلورتك.",
    author: "نورا جلفي",
    title: "مدير التسويق في أوروبا والشرق الأوسط وأفريقيا",
    company: "إنسايت OTA",
  },
  {
    quote:
      "إننا في شركة دي-إج متحمسون وفخورون بأن نكون شريكًا مؤسسًا لمنصة إكسبلورتك الجديدة - ليس فقط لأن الشرق الأوسط سوق مهم جدًا لـ دي-إج ولكن أيضًا لأن هذه المنصة مصممة بشكل جيد وستمنح أصحاب الفنادق نظرة عامة رائعة على مختلف الحلول المتوفرة.",
    author: "هاينريش كيسلر",
    title: "المدير التجاري",
    company: "دي-إج",
  },
  {
    quote:
      "متحمسون لأن نكون جزءًا من هذه المبادرة الرقمية الجديدة من إكسبلورتك. إنه مصدر رائع ليس له مثيل لصناعة الضيافة. يمكن للمشترين أو الموردين الآن الحصول على كل المعلومات المتعلقة بالحلول التقنية ضمن منصة واحدة.",
    author: "أميت شاردا",
    title: "نائب الرئيس في برولوجيك أولًا",
    company: "برولوجيك فيرست",
  },
];

const TrustedCompanies = () => {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = React.useRef(null);
  const allCards = slidesData.flat();
  const visibleSlides = isArabic ? [arabicCards] : slidesData;
  const visibleMobileCards = isArabic ? arabicCards : allCards;
  const mobileCardsCount = visibleMobileCards.length;

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDotClick = (index) => {
    if (isMobile) {
      const targetCard = scrollRef.current?.children?.[index];
      targetCard?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setCurrentSlide(index);
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 font-sans" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto mb-10 max-w-[1380px] px-6 text-center lg:mb-28">
        <h2
          className="mx-auto max-w-[1040px] text-[24px] font-semibold leading-[1.3] text-black lg:text-[42px] lg:font-bold"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {isArabic
            ? "البائعون: منصة موثوق بها عالميًا ومعتمدة من قبل مزودي التكنولوجيا المعروفين."
            : "Trusted and recognized by renowned global hospitality tech companies."}
        </h2>
      </div>

      {isMobile ? (
        <div className="relative w-full overflow-visible pb-4 pt-12">
          <div
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(event) => {
              const cardWidth = event.currentTarget.offsetWidth;
              if (!cardWidth) return;
              const active = Math.round(event.currentTarget.scrollLeft / cardWidth);
              if (active !== currentSlide) setCurrentSlide(active);
            }}
          >
            {visibleMobileCards.map((card, index) => (
              <div key={index} className="flex w-full shrink-0 snap-center items-center justify-center px-6">
                <div className="w-full max-w-[440px]">
                  <TestimonialCard {...card} isArabic={isArabic} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative -mb-[30px] -mt-[30px] w-full overflow-hidden pb-[30px] pt-[30px]">
          <div
            className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {visibleSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex w-full shrink-0 flex-col items-center justify-start">
                <div className="mx-auto flex w-full max-w-[1380px] flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:gap-[3.5%] lg:px-8">
                  {slide.slice(0, 3).map((card, cardIndex) => (
                    <TestimonialCard key={cardIndex} {...card} isArabic={isArabic} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={`relative z-10 w-full px-6 font-sans ${isMobile ? "mt-0" : "mt-12"}`}>
        <div className={`${isMobile ? "max-w-[440px] gap-2" : "max-w-[1380px] gap-2"} mx-auto flex items-center justify-center`}>
          {(isMobile ? visibleMobileCards : visibleSlides).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                isMobile ? "h-4 w-4" : "h-2 w-8"
              } ${currentSlide === index ? "bg-[#0B5BFF] shadow-[0_0_0_2px_rgba(11,91,255,0.14)]" : "bg-[#E0E5ED]"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
import quoteIcon from "../../assets/icon/quote.png";
