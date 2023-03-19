import NavItem from "./NavItem";
import NavLogo from "./NavLogo";

export default function NavBar() {
  return (
    <div className="flex items-center my-12">
      <div className="w-4/12">
        <NavLogo />
      </div>
      <div className="w-8/12">
        <NavItem />
      </div>
    </div>
  );
}
