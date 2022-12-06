import ReactLoading from "react-loading";

export default function Spinner () {
  return (
    <div className="spinner">
      <ReactLoading type="spin" color="#DC1C83" height={100} width={100} className="mx-auto my-4" />
    </div>
  );
};
