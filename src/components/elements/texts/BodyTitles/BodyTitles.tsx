import { addAccentFont } from "../../../../utils/functions/addAccentFont";
import "./BodyTitles.scss";
import React, { useEffect, useState } from "react";

const BodyTitles = ({
  text = "text pending",
  hierarchy,
  color = "dark",
}: {
  text: string;
  hierarchy: number;
  color: string;
}) => {

  const [textToPrint, setTextToPrint] = useState(text)

  useEffect(()=>{

    setTextToPrint(addAccentFont(text))

  },[])

  switch (hierarchy) {
    case 1:
      return (
        <>
          <h1 className={`body-title body-title-h1 body-title-${color}`}>
            <span className="accent-font">
              {textToPrint.letterToAccent.value}
            </span>
            {textToPrint.restOfTheText.value}
          </h1>
        </>
      );
      break;
    case 2:
      return (
        <>
          <h2 className={`body-title body-title-h2 body-title-${color}`}>
            <span className="accent-font">
              {textToPrint.letterToAccent.value}
            </span>
            {textToPrint.restOfTheText.value}
          </h2>
        </>
      );
      break;
    case 3:
      return (
        <>
          <h3 className={`body-title body-title-h3 body-title-${color}`}>
            <span className="accent-font">
              {textToPrint.letterToAccent.value}
            </span>
            {textToPrint.restOfTheText.value}
          </h3>
        </>
      );
      break;
    case 4:
      return (
        <>
          <h4 className={`body-title body-title-h4 body-title-${color}`}>
            <span className="accent-font">
              {textToPrint.letterToAccent.value}
            </span>
            {textToPrint.restOfTheText.value}
          </h4>
        </>
      );
      break;
    case 5:
      return (
        <>
          <h5 className={`body-title body-title-h5 body-title-${color}`}>
            <span className="accent-font">
              {textToPrint.letterToAccent.value}
            </span>
            {textToPrint.restOfTheText.value}
          </h5>
        </>
      );
      break;
    case 6:
      return (
        <>
          <h6 className={`body-title body-title-h6 body-title-${color}`}>
            <span className="accent-font">
              {textToPrint.letterToAccent.value}
            </span>
            {textToPrint.restOfTheText.value}
          </h6>
        </>
      );
      break;
    case 7:
      return (
        <>
          <h7 className={`body-title body-title-h7 body-title-${color}`}>
            <span className="accent-font">
              {textToPrint.letterToAccent.value}
            </span>
            {textToPrint.restOfTheText.value}
          </h7>
        </>
      );
      break;

    default:
      break;
  }
};

export default BodyTitles;
