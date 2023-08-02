import "./Modal.scss";
import Button from "./Button";
import { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
  closeAction: () => void;
}

const Modal = ({ children, closeAction }: ModalProps) => {
  return (
    <div className="Gallery">
      {
        <div className="Modal__Backdrop">
          <div className="Modal">
            <Button className="Modal__Close" onClick={closeAction}>
              ×
            </Button>
            {children}
          </div>
        </div>
      }
    </div>
  );
};

export default Modal;
