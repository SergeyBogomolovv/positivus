import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="flex items-center">
      <Logo />
      <Navbar />
    </header>
  );
}
