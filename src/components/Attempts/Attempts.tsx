import React from "react";
import { useTranslation } from 'react-i18next';

import "./Attempts.scss";

interface IAttempts {
  count: number;
}

function Attempts({ count }: IAttempts) {

  const { t } = useTranslation();

  return (
    <div className="attempts">
      <div className="attempts__title">{ t('attemtps.title') }</div>
      <div className="attempts__count">{count}</div>
    </div>
  );
}

export default Attempts;
