import React, { MouseEventHandler, useEffect, useState } from "react";
import Attempts from "../Attempts";
import Logo from "../Logo";
import Modal, { IModal } from "../Modal";
import Wheel from "../Wheel";
import { ADDITIONAL_URL_PARAMS, HOST } from '../../constant';
import redirect, { checkEarlierRedirect } from '../../utils/redirect';

import "./App.scss";

function App() {

  const rotateDuration = 4;

  const [attempts, setAttempts] = useState([]);
  const [isModal, setIsModal] = useState<IModal | false>(false);
  const [wheelRotate, setWheelRotate] = useState(0);
  const [wheelCurrentAttempt, setWheelCurrentAttempt] = useState(0);
  const [wheelIsRotating, setWheelIsRotating] = useState(false);

  useEffect(() => {
    checkEarlierRedirect();
  }, []);

  useEffect(() => {
    fetch('attempts.json')
      .then((res) => res.json())
      .then((data) => setAttempts(data));
  }, []);

  const wheelHandler = () => {

    if (wheelIsRotating) return;

    if (wheelCurrentAttempt < attempts.length) {
      setIsModal(false);
      setWheelIsRotating(true);
      setWheelCurrentAttempt((prevState) => {
        return prevState + 1;
      });

      const { popup, rotate } = attempts[wheelCurrentAttempt];

      setWheelRotate(rotate);

      setTimeout(() => {
        setIsModal(popup);
        setWheelIsRotating(false);
      }, rotateDuration * 1000);
    }

    if (wheelCurrentAttempt === attempts.length) {
      redirect(HOST, ADDITIONAL_URL_PARAMS);
    }
  }

  return (
    <div className="app">
      <div className="app__logo">
        <Logo />
      </div>
      <div className="app__attempts">
        <Attempts count={ attempts.length - wheelCurrentAttempt } />
      </div>
      <div className="app__wheel">
        <Wheel rotate={ wheelRotate } handler={ wheelHandler } duration={ rotateDuration } />
      </div>
      <div className="app__dwarf-left"></div>
      <div className="app__dwarf-right"></div>
        {
        isModal ? <div className="app__modals"><Modal {...isModal} handler={wheelHandler} /></div> : null
        }
    </div>
  );
}

export default App;
