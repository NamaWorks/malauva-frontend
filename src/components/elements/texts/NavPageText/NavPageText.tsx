import './NavPageText.scss'

const NavPageText = ({ text }: { text: string }) => {
  return (
    <>
      <p className='page-text'>{text}</p>
      {/* <p className='page-text'>{Children}</p> */}
    </>
  )
}

export default NavPageText