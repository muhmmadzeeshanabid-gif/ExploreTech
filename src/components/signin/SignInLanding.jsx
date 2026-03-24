import useLockBodyScroll from "../../hooks/useLockBodyScroll.js";
import SignInFormPanel from "./SignInFormPanel.jsx";
import SignInPromoPanel from "./SignInPromoPanel.jsx";

const SignInLanding = ({ open, onHome, youtubeUrl }) => {
  useLockBodyScroll(open);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-white">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <SignInFormPanel onHome={onHome} />
        <div className="hidden md:block">
          <SignInPromoPanel youtubeUrl={youtubeUrl} />
        </div>
      </div>
    </div>
  );
};

export default SignInLanding;
