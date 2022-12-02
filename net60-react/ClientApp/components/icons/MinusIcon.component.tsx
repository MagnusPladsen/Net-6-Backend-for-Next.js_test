import Image from "next/image";

export default function MinusIcon({
  height,
  width,
}: {
  height: string;
  width: string;
}) {
  return (
    <>
      <Image
        src="/images/icons/minusIcon.svg"
        height={height}
        width={width}
        alt="Minus icon"
      />
    </>
  );
}
