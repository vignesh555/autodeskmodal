import React from "react";
import { useParams } from "react-router-dom";

import Title from "../../components/Title";

const DeveloperGuide = () => {
  const { pageTitle } = useParams();
  return (<Title title={`Developer guide to ${pageTitle}`} />);
};

export default DeveloperGuide;
