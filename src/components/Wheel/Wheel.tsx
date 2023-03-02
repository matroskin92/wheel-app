import React, { MouseEventHandler } from "react";
import { useTranslation } from 'react-i18next';

import "./Wheel.scss";

interface IWheel {
  rotate: number;
  handler: MouseEventHandler;
  duration?: number;
}

function Wheel({ rotate, handler, duration = 4 }: IWheel) {

  const { t } = useTranslation();

  return (
    <div className="wheel" onClick={ handler }>
      <div className="wheel-frame">
        <div className="wheel-frame__drum">
          <div
            className="wheel-drum"
            style={{ transform: `rotate(${rotate}deg)`, transitionDuration: `${duration}s` }}
          >
            <span className="wheel-drum__value">{ t('wheel.value_1') }</span>
            <span className="wheel-drum__value">{ t('wheel.value_2') }</span>
            <span className="wheel-drum__value">{ t('wheel.value_3') }</span>
            <span className="wheel-drum__value">{ t('wheel.value_4') }</span>
            <span className="wheel-drum__value">{ t('wheel.value_5') }</span>
            <span className="wheel-drum__value">{ t('wheel.value_6') }</span>
            <span className="wheel-drum__value">{ t('wheel.value_2') }</span>
            <span className="wheel-drum__value">{ t('wheel.value_3') }</span>
          </div>
        </div>
        <div className="wheel-frame__lights"></div>
        <div className="wheel-frame__cta">
          <button type="button" className="wheel-cta">
            <span>{ t('wheel.call_to_action') }</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wheel;
