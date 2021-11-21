import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";

interface IModalProps {
  messages?: string;
  isModalOpen: boolean;
  closeModal: () => void;
}

export const ModalWindow: FunctionComponent<IModalProps> = ({
  messages,
  isModalOpen,
  closeModal,
}) => {
  return (
    <>
      <Modal
        size="sm"
        show={isModalOpen}
        onHide={closeModal}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{messages}</Modal.Body>
      </Modal>
    </>
  );
};
