import * as Yup from "yup";

const validations = [
  Yup.object({
    tickets: Yup.object()
      .required("Opphold må velges")
      .test("is-valid", "Minst en billett må velges", (tickets) =>
        Object.values(tickets).some((ticket) => ticket > 0)
      ),
    dateRange: Yup.object().required("Opphold må velges"),
  }),
  Yup.object({
    placementId: Yup.string().required(
      "Plassering må velges på kartet ovenfor"
    ),
  }),
  Yup.object({
    customerInfo: Yup.object({
      name: Yup.string()
        .required("Navn må fylles ut")
        .matches(/^[a-zA-ZæøåÆØÅ ]+$/, "Navn kan kun inneholde bokstaver"),
      address: Yup.string().required("Adresse må fylles ut"),
      postCode: Yup.string()
        .typeError("Postnummer kan kun inneholde tall")
        .required("Postnummer må fylles ut")
        .length(4, "Postnummer må være 4 siffer")
        .matches(/^[0-9]+$/, "Postnummer kan kun inneholde tall"),
      postCity: Yup.string()
        .required("Poststed må fylles ut")
        .matches(/^[aA-zZ\s]+$/, "Poststed kan kun ineholde bokstaver"),
      email: Yup.string()
        .email("E-postadresse må være en gyldig epost")
        .required("E-postadresse må fylles ut"),
      phone: Yup.string()
        .typeError("Postnummer kan kun inneholde tall")
        .required("Telefonnummer må fylles ut")
        .matches(
          /^[4|9]\d{7}$/,
          "Telefonnummer kan kun være ett gyldig norsk telefonnummer"
        ),
    }),
  }),
];

export default validations;
