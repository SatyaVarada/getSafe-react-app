import React, { useState } from 'react'
import { EMAIL, ERROR_MESSAGE_EMAIL } from '../utilities/constants'
import { displayErrorMessage } from '../utilities/utils'

interface EmailStepProps {
  callBack: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const OnSubmitOfEmail: () => void = () => {
    const regExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (regExp.test(email)) {
      setErrorMessage('')
      props.callBack(EMAIL, email)
    } else {
      setErrorMessage(ERROR_MESSAGE_EMAIL)
    }
  }

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      {displayErrorMessage(errorMessage)}
      <button onClick={OnSubmitOfEmail}>Next</button>
    </>
  )
}

export default EmailStep
