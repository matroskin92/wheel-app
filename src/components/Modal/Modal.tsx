import React, { MouseEventHandler } from "react";
import { useTranslation } from 'react-i18next';
import './Modal.scss';

export interface IModal {
  description: string;
  value: string;
  before_cta: string;
  call_to_action: string;
  handler?: MouseEventHandler;
}

function Modal({ description, value, call_to_action, before_cta, handler }: IModal) {

  const { t } = useTranslation();

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal-content">
          <p className="modal-content__header">{ t('modal.header') }</p>
          <p className="modal-content__description">{ t(description) }</p>
          <p className="modal-content__value">{ t(value) }</p>
          <p className="modal-content__after-value">{ t(before_cta) }</p>
          <button className="modal-content__button" onClick={ handler }>{ t(call_to_action) }</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;