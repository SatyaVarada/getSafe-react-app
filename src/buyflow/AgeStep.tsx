import React, { useState } from 'react'
import { AGE, ERROR_MESSAGE_AGE } from '../utilities/constants'
import { displayErrorMessage } from '../utilities/utils'

interface AgeStepProps {
  callBack: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  const OnSubmitOfAge: () => void = () => {
    if (age > 0 && age <= 150) {
      setErrorMessage('')
      props.callBack(AGE, age)
    } else {
      setErrorMessage(ERROR_MESSAGE_AGE)
    }
  }

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          min="1"
          max="150"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
        ></input>
      </div>
      {displayErrorMessage(errorMessage)}
      <button onClick={OnSubmitOfAge}>Next</button>
    </>
  )
}

export default AgeStep
