import './LinkText.scss'
import React from "react";

const LinkText = ({
  text = "text pending",
  link = "#",
  kind = "regular",
  color = "grey",
}: {
  text?: string,
  link?: string,
  kind?: string,
  color?: string,
}) => {
  return (
    <>
      <a className={`link link-${kind} link-${color}`} href={link}>{text}</a>
    </>
  );
};

export default LinkText;
