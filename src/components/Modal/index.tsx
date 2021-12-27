import React, {
  createRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { ModalContainer } from "./styles";
import { ModalProps } from "./types";

const ModalRefContainer: React.ForwardRefRenderFunction<ModalProps> = (
  props,
  ref
) => {
  const [element, setElement] = useState<JSX.Element | null>(null);

  const openModal = (el: JSX.Element | null) => {
    if (el) setElement(el);
  };

  const closeModal = () => {
    setElement(null);
  };

  useImperativeHandle(
    ref,
    () => ({
      openModal,
      closeModal,
    }),
    []
  );

  return (
    (element && (
      <ModalContainer>
        {element}
        <div className="pane" onClick={closeModal} />
      </ModalContainer>
    )) ||
    null
  );
};

const ModalWithRef = forwardRef(ModalRefContainer);

const modalRef = createRef<ModalProps>();

const Modal: React.FC = () => <ModalWithRef ref={modalRef} />;

export const useModal = (): ModalProps => ({
  openModal: (el: JSX.Element | null) => modalRef.current?.openModal(el),
  closeModal: () => modalRef.current?.closeModal(),
});

export default Modal;
