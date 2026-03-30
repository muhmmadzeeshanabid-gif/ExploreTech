import {
  MobileMenuButton,
  MobileSearchButton,
  MobileSignInButton,
  TabletMenuButton,
  TabletSearchButton,
  TabletSignInButton,
} from "./NavMenuButtons.jsx";

const NavMenuResponsiveActions = ({
  language,
  onSignIn,
  onOpenSearch,
  onOpenDrawer,
}) => {
  return (
    <>
      <div
        className={`hidden items-center gap-2 md:flex lg:hidden ${
          language === "AR" ? "flex-row-reverse" : ""
        }`}
      >
        <TabletSearchButton onClick={onOpenSearch} />
        <TabletSignInButton language={language} onSignIn={onSignIn} />
        <TabletMenuButton onClick={onOpenDrawer} />
      </div>

      <div
        className={`flex items-center gap-3 md:hidden lg:hidden ${
          language === "AR" ? "flex-row-reverse" : ""
        }`}
      >
        <MobileSearchButton onClick={onOpenSearch} />
        <MobileSignInButton language={language} onSignIn={onSignIn} />
        <MobileMenuButton onClick={onOpenDrawer} />
      </div>
    </>
  );
};

export default NavMenuResponsiveActions;
