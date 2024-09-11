import Image from "next/image";

export default function Companies() {
  return (
    <div className="flex items-center justify-between gap-10 my-10">
      <Image
        src="/companies/amazon.svg"
        alt="amazon logo"
        width={100}
        height={50}
      />
      <Image
        src="/companies/dribble.svg"
        alt="dribble logo"
        width={100}
        height={50}
      />
      <Image
        src="/companies/hubspot.svg"
        alt="hubspot logo"
        width={100}
        height={50}
      />
      <Image
        src="/companies/netflix.svg"
        alt="netflix logo"
        width={100}
        height={50}
      />
      <Image
        src="/companies/notion.svg"
        alt="notion logo"
        width={100}
        height={50}
      />
      <Image
        src="/companies/zoom.svg"
        alt="zoom logo"
        width={100}
        height={50}
      />
    </div>
  );
}
