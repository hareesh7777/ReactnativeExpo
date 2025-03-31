import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarButton from "./NavbarButton";
import "tailwindcss";

const NavbarMain = () => {
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarButton />
      </div>
    </nav>
  );
};

export default NavbarMain;
