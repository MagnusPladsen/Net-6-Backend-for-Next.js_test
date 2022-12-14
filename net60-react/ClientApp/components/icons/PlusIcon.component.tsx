import Image from "next/image";

export default function PlusIcon({
  height,
  width,
}: {
  height: string;
  width: string;
}) {
  return (
    <>
      <Image
        src="/images/icons/plusIcon.svg"
        height={height}
        width={width}
        alt="Plus icon"
      />
    </>
  );
}
