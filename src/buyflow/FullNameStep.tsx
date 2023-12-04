import React, { useState } from 'react'

interface FullNameStepProps {
  cb: (field: string, value: string) => void
}

const FullNameStep: React.FC<FullNameStepProps> = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <>
      <div>
        First Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(String(value))
          }}
          value={firstName}
        ></input>
      </div>
      <div>
        Last Name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(String(value))
          }}
          value={lastName}
        ></input>
      </div>
      <button onClick={() => props.cb('name', `${firstName} ${lastName}`)}>Next</button>
    </>
  )
}

export default FullNameStep
