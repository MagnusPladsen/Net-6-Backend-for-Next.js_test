import Head from "next/head";
import Image from "next/image";
import PrimaryButton from "../../components/buttons/Button.component";
import OrderLine from "../../components/order/OrderLine.component";
import CustomerInfo from "../../components/summary/CustomerInfo.component";
import ListTickets from "../../components/summary/ListTickets.component";
import PaymentInfo from "../../components/summary/PaymentInfo.component";
import QrCode from "../../components/summary/QrCode.component";
import { concert, TICKETS } from "./tickets/[id]";

interface Order {
  discountCode: {
    [key: string]: number;
  };
  [key: string]: any;
}

export default function Summary({}: {}) {
  const order: Order = {
    orderNumber: "123456789",
    concert: concert,
    tickets: {
      "ticket-1": 1,
      "ticket-2": 1,
    },
    dateRange: {
      dateFrom: new Date("01 Oct 2024 00:00:00 GMT"),
      dateTo: new Date("06 Oct 2024 00:00:00 GMT"),
    },
    placementId: "D21",
    discountCode: {
      test20: 20,
    },
    customerInfo: {
      name: "Ola Nordmann",
      address: "Ola Nordmannsgate 1",
      postCode: "1234",
      postCity: "Oslo",
      email: "ola@nordmann.no",
      phone: "12345678",
    },
    invoiceInfo: {
      name: "Ola Nordmann",
      email: "ola@nordmann.no",
    },
  };

  const discount = Object.values(order.discountCode)[0] ?? 0;

  const discountAmount = Object.keys(order.tickets).reduce((acc, ticketId) => {
    let price = TICKETS[ticketId].price;
    let amount = order.tickets[ticketId];
    return acc + price * amount * (discount / 100);
  }, 0);

  const totalSum = Object.keys(order.tickets).reduce((acc, ticketId) => {
    let price = TICKETS[ticketId].price;
    let priceAfterDiscount = price - (price * discount) / 100;
    const tickets = [];
    tickets.push(priceAfterDiscount * order.tickets[ticketId]);
    return tickets[0] + acc;
  }, 0);

  const paymentInfo = () => {
    if (order.cardInfo) {
      return (
        <>
          <p className="text-base lg:text-xs font-bold">Betalingsmetode: Kort</p>
          <p className="text-base lg:text-xs">
            <span className="font-bold">Navn: </span>{" "}
            {order.cardInfo.cardHolder}
            <br />
            <span className="font-bold">Kortnummer: </span>{" "}
            {order.cardInfo.cardNumber}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="text-base lg:text-xs">
            <span className="font-bold">Betalingsmetode: </span>Faktura
          </p>
          <p className="text-base lg:text-xs">
            <span className="font-bold">Navn: </span> {order.invoiceInfo.name}
            <br />
            <span className="font-bold">Epost: </span> {order.invoiceInfo.email}
          </p>
        </>
      );
    }
  };

  const headingStyle = "text-lg lg:text-sm text-primary font-bold font-roboto";

  return (
    <>
      <Head>
        <title>Bestilling</title>
      </Head>
      <div className="lg:my-24 printThis">
        <div className="px-10 lg:px-20 w-full md:w-[80vw] lg:w-[60vw] 2xl:w-[40vw] mx-auto rounded-lg bg-white border border-border pb-20 drop-shadow-default">
          <div className="text-center my-12 ">
            <h1
              className={`font-bold text-primary font-roboto text-3xl md:text-3xl lg:text-4xl `}
            >
              Din bestilling
            </h1>
            <h2 className="my-4 text-secondary">{concert.name}</h2>
            <div className="lg:my-24 print:my-24">
              <div
                className={`absolute hidden print:block top-12 right-20 print:right-12`}
              >
                <QrCode
                  orderNumber={Number(order.orderNumber)}
                  width={100}
                  link="https://google.com"
                />
              </div>
              <div
                className={`hidden absolute lg:block print:block left-20 print:left-12 top-12`}
              >
                <Image
                  src={concert.image}
                  width="80px"
                  height="80px"
                  alt="Image of concert"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <h3 className={`${headingStyle}`}>Ordrenummer</h3>
            <p className="text-2xl  font-roboto">
              #{order.orderNumber}
            </p>
          </div>

          <div className="w-full mx-auto">
            <OrderLine />
          </div>

          <ListTickets
            TICKETS={TICKETS}
            order={order}
            headingStyle={headingStyle}
          />

          <div className="w-full mx-auto">
            <OrderLine />
          </div>

          <div className={`pb-4 lg:p-0 my-6 mx-auto`}>
            <CustomerInfo
              customerInfo={order.customerInfo}
              headingStyle={headingStyle}
            />
          </div>

          <div className="w-full mx-auto">
            <OrderLine />

            <div className={`flex flex-row gap-5 pb-4 lg:p-0 my-6 mx-auto`}>
              <PaymentInfo
                paymentInfo={paymentInfo}
                order={order}
                headingStyle={headingStyle}
                discountAmount={discountAmount}
              />
            </div>

            <div className="w-full mx-auto">
              <OrderLine />
            </div>

            <div
              className={`flex flex-row justify-between items-end pb-4 lg:p-0 mt-12 mx-auto`}
            >
              <p className={`text-primary font-bold font-roboto text-2xl`}>Totalt</p>
              <p className="font-roboto text-xl">
                kr <span className="pl-2 font-bold text-3xl">{totalSum},-</span>
              </p>
            </div>

            <div className="noPrint w-[60%] md:w-[40%] lg:w-full mt-12 lg:mt-24 lg:mx-0 mx-auto lg:flex lg:justify-end">
              <PrimaryButton
                text="Skriv ut"
                primary={true}
                disabled={false}
                onClick={() => window.print()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
