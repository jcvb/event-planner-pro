import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <>
      <nav className="w-full md:filter-none sticky top-0 backdrop-filter backdrop-blur-md shadow glassmorphism z-50">
        <div className="flex justify-between items-center w-full md:max-w-screen-xl mx-auto p-3">
          <Logo />
          <Menu />
        </div>
      </nav>
    </>
  );
}