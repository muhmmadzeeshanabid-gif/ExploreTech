import React, { useState } from "react";

const QuoteIcon = () => (
  <img
    src="/quote.png"
    alt="Quote Icon"
    className="w-[20px] h-[20px] object-contain"
  />
);

const TestimonialCard = ({ quote, author, title, company, pHeight }) => {
  return (
    <div className="w-full max-w-[440px] mx-auto lg:max-w-none lg:w-[31%] flex flex-col mb-16 lg:mb-0">
      {/* Box containing the border styling */}
      <div className="relative pt-12 pb-14 pl-[45.5px] pr-4 border-l-[3px] border-b-[4px] border-[#1fc04f] rounded-bl-[100px] rounded-tl-none rounded-tr-none rounded-br-none h-fit flex flex-col justify-start items-start w-full">
        {/* Top partial border */}
        <div className="absolute top-0 left-0 h-[3px] bg-[#1fc04f] w-[35px]"></div>

        {/* Top-left quote icon */}
        <div className="absolute -top-[20px] left-[30px] w-[45px] h-[45px] bg-[#1fc04f] rounded-full flex items-center justify-center z-10">
          <QuoteIcon />
        </div>

        {/* Gray vertical line extending up from the bottom-right icon */}
        <div className="absolute bottom-[20px] right-[20px] w-[1px] h-[60px] bg-[#e5e7eb] z-0"></div>

        {/* Bottom-right quote icon */}
        <div className="absolute -bottom-[20px] right-0 w-[45px] h-[45px] bg-[#1fc04f] rounded-full flex items-center justify-center z-10">
          <QuoteIcon />
        </div>

        <p
          className="text-[14px] leading-[22px] text-[#242424] mb-6 flex-grow font-normal w-full"
          style={{
            fontFamily: '"SF Pro Text", sans-serif',
            minHeight: "auto", // Allow height to adjust naturally on mobile
          }}
        >
          {quote}
        </p>

        <div
          className="flex flex-col w-full"
          style={{ fontFamily: '"SF Pro Text", sans-serif' }}
        >
          <div
            className="text-[16px] leading-[24px] font-medium text-[#242424] w-full"
          >
            {author}
          </div>
          <div className="text-[14px] leading-[21px] font-normal text-[#242424] w-full">
            {title}
          </div>
          <div className="text-[14px] leading-[21px] font-medium text-[#242424] w-full">
            {company}
          </div>
        </div>
      </div>
    </div>
  );
};

const slidesData = [
  [
    {
      quote: "Excited to be a part of a new digital initiative by ExploreTECH. It is a great resource for Hospitality Industry. It is inimitable. Buyers or Suppliers can now find all the information under one single platform for Technology.",
      author: "Amit Sharda",
      title: "Chief Operating Officer",
      company: "Prologic First",
      pHeight: "72px",
    },
    {
      quote: "D-EDGE is excited and proud to be a founding partner of the new ExploreTECH platform - not only because the Middle East is a very important market for D-EDGE but also because the platform is well thought through and will give all Hoteliers a great overview on what's out there",
      author: "Heinrich Kessler",
      title: "Chief Commercial Officer",
      company: "D-EDGE",
      pHeight: "90px",
    },
    {
      quote: "Our partnership with ExploreTECH aims to provide hoteliers with the industry's number one hotel technology solutions (Rate Shopping & Market Intelligence Tool, Parity Management Software, and Business Intelligence Software), so they can leverage our data and insights for business success. We look forward to empowering hoteliers to make smarter revenue, distribution and marketing decisions through this collaboration with ExploreTECH.",
      author: "Nora Galfi",
      title: "EMEA Marketing Manager",
      company: "Lighthouse",
      pHeight: "162px",
    },
  ],
  [
    {
      quote: "We're excited to work with ExploreTECH to help bring the latest hospitality cloud technology to the Middle East. As a global leader in modern PMS platforms and guest-centric technology, we share ExploreTECH's commitment to promoting innovation in the hospitality industry and helping hotels drive revenue, streamline operations, and elevate the guest experience.",
      author: "Jeff Down",
      title: "Head of Sales - EMEA",
      company: "Stayntouch",
      pHeight: "144px",
    },
    {
      quote: "We are very excited about our business partnership with ExploreTech. We believe this partnership will be another important milestone in our Journey and we will achieve lots of success together.",
      author: "Adel Abdel Masih",
      title: "Founder",
      company: "Sita Egypt",
      pHeight: "72px",
    },
    {
      quote: "We're delighted to partner with ExploreTECH, a recognized leader in the field. This collaboration allows us to extend our reach and offer our solutions to a wider audience.",
      author: "Mrigank Devam",
      title: "Founding CEO",
      company: "Viralops",
      pHeight: "72px",
    },
  ],
  [
    {
      quote: "We are very excited about our business partnership with ExploreTech. We believe this partnership will be another important milestone in our Journey and we will achieve lots of success together.",
      author: "Adel Abdel Masih",
      title: "Founder",
      company: "Sita Egypt",
      pHeight: "72px",
    },
    {
      quote: "We're delighted to partner with ExploreTECH, a recognized leader in the field. This collaboration allows us to extend our reach and offer our solutions to a wider audience.",
      author: "Mrigank Devam",
      title: "Founding CEO",
      company: "Viralops",
      pHeight: "72px",
    },
    {
      quote: "We are excited to join forces with ExploreTECH and look forward to collaborating with industry professionals who are passionate about innovation and digital transformation.",
      author: "Nikkie-Randhawa Singh",
      title: "Senior Vice President APAC & Middle East",
      company: "Shiji",
      pHeight: "72px",
    },
  ],
];


const TrustedCompanies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = React.useRef(null);
  const allCards = slidesData.flat();

  // Detect mobile viewport (using 1024px as a breakpoint for 'one card' view)
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const animateScrollByCards = (direction, numCards = 1) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    // On mobile, find the next card index based on current scroll position
    const cardWidth = container.offsetWidth;
    const currentScroll = container.scrollLeft;
    const currentCardIndex = Math.round(currentScroll / cardWidth);
    
    let nextIndex = currentCardIndex + (direction * numCards);
    if (nextIndex >= allCards.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = allCards.length - 1;

    const targetPos = nextIndex * cardWidth;
    const startPos = container.scrollLeft;
    const distance = targetPos - startPos;
    const duration = isMobile ? 1200 : 700; // Slow motion for mobile
    let startTime = null;

    // Temporarily disable snapping to allow custom slow animation
    if (isMobile) container.style.scrollSnapType = "none";

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPos, distance, duration);
      
      container.scrollLeft = run;
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        container.scrollLeft = targetPos;
        setCurrentSlide(nextIndex);
        // Re-enable snapping after animation finishes
        if (isMobile) container.style.scrollSnapType = "x mandatory";
      }
    };

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };


  const handleDotClick = (index) => {
    if (isMobile) {
      const cardWidth = scrollRef.current.offsetWidth;
      const targetPos = index * cardWidth;
      const startPos = scrollRef.current.scrollLeft;
      const distance = targetPos - startPos;
      
      scrollRef.current.style.scrollSnapType = "none";
      let startTime = null;
      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const duration = 1200;
        const run = (function easeInOutQuad(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        })(timeElapsed, startPos, distance, duration);
        
        scrollRef.current.scrollLeft = run;
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          scrollRef.current.scrollLeft = targetPos;
          setCurrentSlide(index);
          scrollRef.current.style.scrollSnapType = "x mandatory";
        }
      };
      requestAnimationFrame(animation);
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden font-sans">
      <div className="mx-auto max-w-[1380px] px-6 text-center mb-10 lg:mb-28">
        <h2 
          className="text-[24px] font-semibold leading-[24px] text-black lg:text-[42px] lg:font-bold lg:leading-[1.2] max-w-[860px] mx-auto"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Trusted and recognized by renowned global hospitality tech companies.
        </h2>
      </div>

      {isMobile ? (
        /* Mobile View: Single card per screen with snapping */
        <div className="w-full relative overflow-visible pt-12 pb-4">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              scrollBehavior: "auto" // Prevent conflicts with custom JS animation
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {allCards.map((card, index) => (
              <div 
                key={index} 
                className="w-full shrink-0 flex items-center justify-center snap-center px-6"
              >
                <div className="w-full max-w-[440px]">
                  <TestimonialCard {...card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Desktop View: 3 cards per slide with transform */
        <div className="w-full relative pt-[30px] pb-[30px] -mt-[30px] -mb-[30px] overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData.map((slide, slideIndex) => (
              <div 
                key={slideIndex} 
                className="w-full shrink-0 flex flex-col items-center justify-start"
              >
                <div className="w-full max-w-[1380px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-[3.5%]">
                  {slide.map((card, cardIndex) => (
                    <TestimonialCard key={cardIndex} {...card} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pagination Dots */}
      <div className={`w-full px-6 ${isMobile ? "mt-0" : "mt-12"} relative z-10 font-sans`}>
        <div className={`${isMobile ? "max-w-[440px] gap-1" : "max-w-[1380px] gap-2"} mx-auto flex justify-center items-center`}>
          {(isMobile ? allCards : slidesData).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                isMobile ? "flex-1" : "w-8"
              } ${
                currentSlide === index ? "bg-[#0B5BFF]" : "bg-[#E0E5ED]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
