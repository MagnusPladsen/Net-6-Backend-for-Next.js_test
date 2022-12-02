export default function CustomerInfo({
  customerInfo,
  headingStyle,
}: {
  customerInfo: any;
  headingStyle: string;
}) {
  const spanStyle = "font-normal ";
  return (
    <>
      <h3 className={`${headingStyle} mb-2`}>Kundeinformasjon</h3>
      <p className="text-base lg:text-xs mb-2">
        {customerInfo.name}
        <br />
        {customerInfo.address}
        <br />
        {customerInfo.postCode}{" "}
        {customerInfo.postCity}
        <br />
        {customerInfo.email}
        <br />
        +47 {customerInfo.phone}
      </p>
    </>
  );
}
