import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="flex items-center w-full justify-between top-10 mb-10">
      <Logo />
      <Navbar />
    </header>
  );
}
