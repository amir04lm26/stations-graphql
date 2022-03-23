import { FC } from "react";
import { ErrorType } from "models/error";
import styles from "./ErrorMessage.module.css";

interface IErrorMessageProps {
  message: ErrorType;
  className?: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ message, className }) => {
  return message ? (
    <p data-testid='error' className={`${styles.error} ${className ?? ""}`}>
      {message}
    </p>
  ) : null;
};

export default ErrorMessage;
