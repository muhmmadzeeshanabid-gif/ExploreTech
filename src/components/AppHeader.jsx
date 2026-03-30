import Navbar from "./navbar/Navbar.jsx";
import SignInLanding from "./signin/SignInLanding.jsx";
import { VideoModal } from "./video-modal/index.js";

const AppHeader = ({ signInOpen, openSignIn, closeSignIn }) => {
  return (
    <div className="bg-white">
      <Navbar onSignIn={openSignIn} onSignUp={openSignIn} />
      <SignInLanding
        open={signInOpen}
        onHome={closeSignIn}
        youtubeUrl="https://youtu.be/UeZX7_UlF9E"
      />
    </div>
  );
};

export default AppHeader;
