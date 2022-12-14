import { useQRCode } from "next-qrcode";

export default function QrCode({
  orderNumber,
  width,
  link,
}: {
  orderNumber: number;
  width: number;
  link: string;
}) {
  const { Canvas } = useQRCode();
  return (
    <div className="onlyPrint">
      <Canvas
        text={link}
        options={{
          type: "image/jpeg",
          quality: 0.3,
          level: "M",
          margin: 3,
          scale: 4,
          width: width,
          color: {
            dark: "#DC1C83",
            light: "#FFFFFF",
          },
        }}
      />
    </div>
  );
}
