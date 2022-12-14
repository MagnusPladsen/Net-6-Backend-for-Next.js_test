export default function PaymentInfo({
  headingStyle,
  paymentInfo,
  order,
  discountAmount,
}: {
  headingStyle: string;
  paymentInfo: any;
  order: any;
  discountAmount: number;
}) {
  return (
    <>
      <div className="flex-col flex-1">
        <h3 className={`${headingStyle} mb-2`}>Betaling</h3>
        <div className="">
          {paymentInfo()}
          {Object.keys(order.discountCode).length > 0 ? (
            <div className="my-4 flex flex-row items-end justify-between">
              <p className="text-base lg:text-xs font-bold">
                Rabattkode:{" "}
                <span className="font-normal">
                  {Object.keys(order.discountCode)[0]}
                </span>
              </p>
              <p className="text-lg lg:text-lg font-bold text-secondary">
                {`- kr ${discountAmount},-`}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
