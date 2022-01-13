import React, { useState } from 'react'
import { EMAIL } from '../utilities/constants'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')

  const OnSubmitOfEmail: () => void = () => {
    let re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (re.test(email)) {
      props.cb(EMAIL, email)
    } else {
      alert('Enter a valid email')
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
      <button onClick={OnSubmitOfEmail}>Next</button>
    </>
  )
}

export default EmailStep
