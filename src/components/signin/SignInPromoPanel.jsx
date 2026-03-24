import { useMemo } from "react";
import { getYouTubeEmbedUrl } from "./youtube.js";

const SignInPromoPanel = ({ youtubeUrl }) => {
  const embedUrl = useMemo(() => getYouTubeEmbedUrl(youtubeUrl), [youtubeUrl]);

  return (
    <div className="flex h-full flex-col justify-center bg-[rgb(0,85,254)] p-10 text-white lg:pt-14">
      <h2
        className="mx-auto w-full max-w-[570px] text-center"
        style={{
          fontFamily: '"SF Pro Text", sans-serif',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "36px",
          color: "rgb(255, 255, 255)",
        }}
      >
        ExploreTECH Launches Native Comparison Tool
      </h2>

      <div className="mx-auto mt-4 w-full max-w-[570px] overflow-hidden rounded-xl bg-black shadow-2xl">
        {embedUrl ? (
          <iframe
            className="h-[323px] w-full"
            src={embedUrl}
            title="ExploreTECH Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="flex aspect-video items-center justify-center px-6 text-center text-sm text-slate-200">
            Invalid YouTube link.
          </div>
        )}
      </div>

      <p
        className="mx-auto mt-6 max-w-[570px]"
        style={{
          fontFamily: '"SF Pro Text", sans-serif',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "21px",
          color: "rgb(255, 255, 255)",
        }}
      >
        Our state-of-the-art Product Comparison Tool enables you to compare
        multiple technologies side by side over a comprehensive list of product
        features, pricing models, technical specifications, and technology
        integrations.
      </p>

      <button
        type="button"
        className="mx-auto mt-1 flex w-full max-w-[570px] items-center gap-2 transition hover:opacity-90"
        style={{
          fontFamily: '"SF Pro Text", sans-serif',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "21px",
          color: "rgb(255, 255, 255)",
        }}
      >
        Learn More{" "}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SignInPromoPanel;

