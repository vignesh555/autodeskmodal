import React from "react";

import { useParams } from "react-router-dom";
import Title from "../../components/Title";

const Intro = () => {
  const { pageTitle } = useParams();
  return (<Title title={`Intro to ${pageTitle}`} />);
};

export default Intro;
