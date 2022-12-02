import { useEffect } from "react";
import FormInput from "./input/FormInput.component";

export default function CustomerInfoForm() {
  useEffect(() => {
    window.scrollTo(0, 180);
  }, []);

  return (
    <>
      <FormInput name="customerInfo.name" type="text" label="Fullt navn" />
      <FormInput name="customerInfo.address" type="text" label="Adresse" />
      <div className="flex gap-10">
        <div className="w-1/2">
          <FormInput
            name="customerInfo.postCode"
            type="number"
            label="Postnummer"
          />
        </div>
        <div className="w-1/2">
          <FormInput
            name="customerInfo.postCity"
            type="text"
            label="Poststed"
          />
        </div>
      </div>
      <FormInput name="customerInfo.phone" type="tel" label="Telefon" />
      <FormInput name="customerInfo.email" type="email" label="Epost" />
    </>
  );
}
