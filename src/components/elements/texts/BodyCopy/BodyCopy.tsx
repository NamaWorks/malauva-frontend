import './BodyCopy.scss'

const BodyCopy = ({ kind='regular', text, color='dark' }: { kind?:string, text: string | undefined, color?: string }) => {
  return (
    <>
      <p className={`body-copy body-copy-${kind} body-copy-${color}`}>{text}</p>
    </>
  )
}

export default BodyCopy