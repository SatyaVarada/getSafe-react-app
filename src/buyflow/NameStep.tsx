import React, { useState } from 'react'

interface NameStepProps {
  cb: (field: string, value: string) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')

  const OnSubmitOfName: () => void = () => {
    if (fname.length > 0 && lname.length > 0) {
      props.cb('name', fname + ' ' + lname)
    } else {
      alert('Enter a both first and last names')
    }
  }

  return (
    <>
      <div>
        First Name:{' '}
        <input
          type="string"
          onChange={({ target: { value } }) => {
            setFname(String(value))
          }}
          value={fname}
        ></input>
        <br />
        Last Name:{' '}
        <input
          type="string"
          onChange={({ target: { value } }) => {
            setLname(String(value))
          }}
          value={lname}
        ></input>
      </div>
      <button onClick={OnSubmitOfName}>Next</button>
    </>
  )
}

export default NameStep
