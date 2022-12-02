import { Formik } from "formik";
import Head from "next/head";
import { useState } from "react";
import CustomerInfoForm from "../../../components/form/CustomerInfoForm.component";
import Order from "../../../components/order/Order.component";
import stepValidations from "../../../components/stepper/stepValidations";
import OrderStep from "../../../components/order/OrderStep.component";
import Payment from "../../../components/tiles/payment/Payment.steps";
import PlacementStep from "../../../components/map/Placement.step";
import TicketsStep from "../../../components/tiles/ticket/Tickets.step";

export interface Tickets {
  [key: string]: {
    name: string;
    price: number;
    description: string;
    icon: string;
  };
}

export const TICKETS: Tickets = {
  "ticket-1": {
    name: "Festivalpass",
    price: 1000,
    description: "Tilskuer plass",
    icon: "/images/icons/ticketIcon.svg",
  },
  "ticket-2": {
    name: "Festivalpass PREMIUM",
    price: 1500,
    description: "Tilskuer plass med PREMIUM plassering",
    icon: "/images/icons/ticketIcon.svg",
  },
  "ticket-3": {
    name: "Festivalpass m/Camping",
    price: 2000,
    description: "Tilskuer plass med camping",
    icon: "/images/icons/campingIcon.svg",
  },
  "ticket-4": {
    name: "Festivalpass m/Camping og strøm",
    price: 2200,
    description: "Tilskuer plass med camping og strøm tilgang",
    icon: "/images/icons/campingIcon.svg",
  },
};

export const concert = {
  name: "Vinstra Country Music Festival 2024",
  dateFrom: new Date("01 Oct 2024 00:00:00 GMT"),
  dateTo: new Date("06 Oct 2024 00:00:00 GMT"),
  location: "Vinstra",
  image: "/images/vinstraFestival.png",
};

export interface Concert {
  name: string;
  dateFrom: Date;
  dateTo: Date;
  location: string;
  image: string;
}

export interface DiscountCodes {
  [key: string]: number;
}

export default function TicketsPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Formik
      initialValues={{
        tickets: Object.keys(TICKETS).reduce((acc, ticketId: string) => {
          acc[ticketId] = 0;
          return acc;
        }, {} as { [key: string]: number }),
        dateRange: "",
        placementId: "",
        customerInfo: {
          name: "",
          address: "",
          postCode: "",
          postCity: "",
          email: "",
          phone: "",
        },
      }}
      validationSchema={stepValidations[stepIndex]}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({
        values,
        isValid,
        validateForm,
        setTouched,
        setFieldValue,
        errors,
      }) => (
        <>
          <Head>
            <title>Bestill Billetter</title>
          </Head>
          <div className="border border-b-red lg:border-none bg-white lg:bg-inherit drop-shadow-default lg:drop-shadow-none py-4 lg:py-0 fixed top-0 z-10 w-full lg:w-[350px] lg:right-[6%] 2xl:right-[25%] lg:mt-[5rem] ">
            <Order
              tickets={values.tickets}
              dateRange={values.dateRange}
              placementId={values.placementId}
              setFieldValue={setFieldValue}
              concert={concert}
              setStepIndex={setStepIndex}
              mobileOpen={mobileOpen}
              setMobileOpen={setMobileOpen}
            />
          </div>
          <div
            className={`${
              mobileOpen ? "blur-sm" : ""
            } w-screen pt-16 lg:py-0 lg:pl-30 2xl:pl-[28rem] min-h-screen lg:pb-20 bg-white border border-border drop-shadow-default lg:max-w-[60%]`}
          >
            <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto lg:mr-28">
              <OrderStep
                title="Billetter"
                number={1}
                stepIndex={stepIndex}
                open={stepIndex === 0}
                setStepIndex={setStepIndex}
                isValid={isValid}
                validateForm={validateForm}
                setTouched={() =>
                  setTouched({
                    tickets: Object.keys(values.tickets).reduce((acc, key) => {
                      return { ...acc, [key]: true };
                    }, {}),
                    dateRange: true,
                  })
                }
              >
                <TicketsStep
                  availableTickets={TICKETS}
                  name="tickets"
                  concert={concert}
                />
              </OrderStep>
              <OrderStep
                title="Plassering"
                number={2}
                stepIndex={stepIndex}
                open={stepIndex === 1}
                setStepIndex={setStepIndex}
                isValid={isValid}
                validateForm={validateForm}
                setTouched={() => setTouched({ placementId: true })}
              >
                <PlacementStep name="placementId" />
              </OrderStep>
              <OrderStep
                title="Opplysninger"
                number={3}
                stepIndex={stepIndex}
                open={stepIndex === 2}
                setStepIndex={setStepIndex}
                isValid={isValid}
                validateForm={validateForm}
                setTouched={() =>
                  setTouched({
                    customerInfo: Object.keys(values.customerInfo).reduce(
                      (acc, key) => {
                        return { ...acc, [key]: true };
                      },
                      {}
                    ),
                  })
                }
              >
                <CustomerInfoForm />
              </OrderStep>

              <OrderStep
                title="Betaling"
                number={4}
                stepIndex={stepIndex}
                open={stepIndex === 3}
                setStepIndex={setStepIndex}
                isValid={isValid}
                validateForm={validateForm}
              >
                <Payment />
              </OrderStep>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
}
