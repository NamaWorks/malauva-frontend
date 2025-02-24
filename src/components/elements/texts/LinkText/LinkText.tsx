import { Link } from 'react-router-dom';
import './LinkText.scss'

const LinkText = ({
  text = "text pending",
  link = "#",
  kind = "regular",
  color = "grey",
  fnc
}: {
  text?: string,
  link?: string,
  kind?: string,
  color?: string,
  fnc?: () => void
}) => {
  return (
    <>
      <Link className={`link link-${kind} link-${color}`} to={link} onClick={fnc} >{text}</Link>
    </>
  );
};

export default LinkText;
