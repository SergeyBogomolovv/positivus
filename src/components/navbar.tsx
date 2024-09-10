import Link from "next/link";

// TODO: animate beautiful svg underline
const linkClassName = "text-xl font-light hover:underline";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6">
      <Link className={linkClassName} href="#about">
        About us
      </Link>
      <Link className={linkClassName} href="#services">
        Services
      </Link>
      <Link className={linkClassName} href="#use-cases">
        Use Cases
      </Link>
      <Link className={linkClassName} href="#pricing">
        Pricing
      </Link>
      <Link className={linkClassName} href="#blog">
        Blog
      </Link>
      <Link
        className="py-4 px-8 rounded-xl text-xl font-light border-2 border-stone-500"
        href="#contact"
      >
        Request a quote
      </Link>
    </nav>
  );
}
