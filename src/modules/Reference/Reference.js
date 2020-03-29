import React from "react";
import { useParams } from "react-router-dom";

import Title from "../../components/Title";

const Reference = () => {
  const { pageTitle } = useParams();
  return (<Title title={`Reference to ${pageTitle}`} />);
};

export default Reference;
