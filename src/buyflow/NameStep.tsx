import React, { useState } from 'react'
import {
  ERROR_MESSAGE_FIRST_NAME,
  ERROR_MESSAGE_LAST_NAME,
  NAME,
} from '../utilities/constants'
import { displayErrorMessage } from '../utilities/utils'

interface NameStepProps {
  callBack: (field: string, value: string) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const OnSubmitOfName: () => void = () => {
    if (fname.length > 0 && lname.length > 0) {
      setErrorMessage('')
      props.callBack(NAME, fname + ' ' + lname)
    } else if (fname.length === 0) {
      setErrorMessage(ERROR_MESSAGE_FIRST_NAME)
    } else {
      setErrorMessage(ERROR_MESSAGE_LAST_NAME)
    }
  }

  return (
    <>
      <div>
        First Name:{' '}
        <input
          type="string"
          onChange={({ target: { value } }) => {
            setFname(String(value).trim())
          }}
          defaultValue={fname}
        ></input>
        <br />
        Last Name:{' '}
        <input
          type="string"
          onChange={({ target: { value } }) => {
            setLname(String(value).trim())
          }}
          defaultValue={lname}
        ></input>
      </div>
      {displayErrorMessage(errorMessage)}
      <button onClick={OnSubmitOfName}>Next</button>
    </>
  )
}

export default NameStep
