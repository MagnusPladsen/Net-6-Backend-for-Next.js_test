import { Formik } from "formik";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { useGetTicketsQuery } from "../../api/apiSlice";
import EditTickets from "../../components/edit/EditTickets.component";
import { TICKETS } from "./tickets/[id]";

const EditMapLeaflet = dynamic(
  () => import("../../components/edit/EditMapLeaflet"),
  { ssr: false }
);

export default function Edit() {
  const [editMap, setEditMap] = useState(true);
  const [editTickets, setEditTickets] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <Formik
      initialValues={{
        tickets: TICKETS,
        dateRange: "",
        availablePlacements: [
          {
            name: "Plass M01",
            bounds: [
              [296, 264],
              [303, 270],
            ],
            id: "M1",
            color: "cyan",
            available: true,
          },
        ],
      }}
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
            <title>Rediger festival</title>
          </Head>
          <div className={`${modalOpen ? "blur-sm" : ""}`}>
            <div className={`text-center my-16`}>
              <h1 className="text-4xl font-roboto font-bold text-primary">
                Rediger festival
              </h1>
            </div>
            <div className="mt-6 w-[80%] mx-auto mb-16">
              <EditTickets
                name="tickets"
                editTickets={editTickets}
                setEditTickets={setEditTickets}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            </div>
            <div className="mt-6 w-[80%] mx-auto mb-16">
              <EditMapLeaflet
                name="availablePlacements"
                editMap={editMap}
                setEditMap={setEditMap}
              />
            </div>
          </div>
        </>
      )}
    </Formik>
  );
}
