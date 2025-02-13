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
  fnc?: ()=>void
}) => {
  return (
    <>
      <a className={`link link-${kind} link-${color}`} href={link} onClick={()=>{fnc}} >{text}</a>
    </>
  );
};

export default LinkText;
