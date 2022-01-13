import React, { useState } from 'react'
import { AGE } from '../utilities/constants'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)

  const OnSubmitOfAge: () => void = () => {
    if (age > 0 && age <= 150) {
      props.cb(AGE, age)
    } else {
      alert('Enter a valid age between 1 and 150')
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
          value={age}
        ></input>
      </div>
      <button onClick={OnSubmitOfAge}>Next</button>
    </>
  )
}

export default AgeStep
