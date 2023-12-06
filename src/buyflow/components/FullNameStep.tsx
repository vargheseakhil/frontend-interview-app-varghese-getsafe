import React, { useState } from 'react';

interface FullNameStepProps {
  cb: (field: string, value: string) => void;
}

const FullNameStep: React.FC<FullNameStepProps> = ({ cb }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter both first and last names');
    } else {
      setError(null);
      cb('name', `${firstName.trim()} ${lastName.trim()}`);
    }
  };

  return (
    <>
      <div>
        <label className="step-label" htmlFor="firstname-input">
          First Name:{' '}
        </label>
        <input
          id='firstname-input'
          type="text"
          placeholder="Enter your first name"
          onChange={({ target: { value } }) => {
            setFirstName(value);
            setError(null);
          }}
          value={firstName}
          aria-label="Enter your first name"
        />
      </div>
      <div>
       <label className="step-label" htmlFor="lastname-input">
        Last Name:{' '}
       </label>
        <input
          id="lastname-input"
          type="text"
          placeholder="Enter your last name"
          onChange={({ target: { value } }) => {
            setLastName(value);
            setError(null);
          }}
          value={lastName}
          aria-label="Enter your last name"
        />
      </div>
      {error && (
        <p style={{ color: 'red' }} role="alert">
          {error}
        </p>
      )}
      <button className="next-btn" onClick={handleNext}>Next</button>
    </>
  );
};

export default FullNameStep;
