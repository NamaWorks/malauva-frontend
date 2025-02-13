import './InfoTexts.scss'

const InfoTexts = ({ kind='regular', text='text pending' }: { kind:string, text: string }) => {
  return (
    <>

      <p className={`info-text info-text-${kind}`}>${text}</p>
    
    </>
  )
}

export default InfoTexts