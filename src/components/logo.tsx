import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.svg"
        alt="Positivus logo"
        className="w-8 h-8 mr-2"
        width={40}
        height={40}
      />
      <h1 className="text-3xl font-semibold">Positivus</h1>
    </div>
  );
}
