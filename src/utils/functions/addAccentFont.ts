export const addAccentFont = (text: string): any => {
  const restOfTheText = text.split('').slice(1, text.length ).join('')
  const letterToAccent = text.split('').slice(-1).join('')

  const objectToReturn = {
    letterToAccent: {
      position: 0,
      value: letterToAccent,
    },
    restOfTheText: {
      position: 1,
      value: restOfTheText,
    }
  }

  return objectToReturn
}