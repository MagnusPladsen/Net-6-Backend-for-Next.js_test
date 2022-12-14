export default function RenderError({ message }: { message: string }) {
  return (
    <>
      <p className="text-red-600 error">{message}</p>
    </>
  );
}
