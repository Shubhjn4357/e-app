import { FaExclamationTriangle } from "react-icons/fa";
import CardWrapper from "./auth/card-wrapper";
const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops ! Something went wrong!"
      backButtonHref="/login"
      backButtonLabel="Back to login"
    >
      <div className=" flex justify-center items-center">
        <FaExclamationTriangle className="text-xl text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
