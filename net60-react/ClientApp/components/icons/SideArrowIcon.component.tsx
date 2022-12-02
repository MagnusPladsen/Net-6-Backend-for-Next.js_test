import Image from "next/image";

export default function SideArrowIcon({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <>
      <Image src={direction === "right" ? "/images/icons/rightArrow.svg" : "/images/icons/leftArrow.svg"} width={40} height={40} alt={`${direction} arrow icon`}/>
    </>
  );
}
