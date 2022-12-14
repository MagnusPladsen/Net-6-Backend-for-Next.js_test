import { useState } from "react";
import PaymentTile from "./PaymentTile.component";

export default function Payment() {
  const [cardOpen, setCardOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  const handleOpen = (type: string) => {
    if (type === "card") {
      setCardOpen(true);
      setInvoiceOpen(false);
    } else if (type === "invoice") {
      setCardOpen(false);
      setInvoiceOpen(true);
    }
  };

  return (
    <>
      <PaymentTile type="card" open={cardOpen} handleOpen={handleOpen} />
      <PaymentTile type="invoice" open={invoiceOpen} handleOpen={handleOpen} />
    </>
  );
}
