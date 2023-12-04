import React, { useState } from 'react';

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = ({ cb }) => {
  const [age, setAge] = useState<number | ''>(0);
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (age === '' || age <= 0 || isNaN(age)) {
      setError('Please enter a valid age');
    } else {
      setError(null);
      cb('age', Number(age));
    }
  };

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(value ? Number(value): '');
            setError(null);
          }}
          value={age}
          aria-label="Enter your age"
          aria-invalid={!!error}
          aria-describedby={error ? 'age-error' : ''}
        />
        {error && (
          <p id="age-error" style={{ color: 'red' }} role="alert">
            {error}
          </p>
        )}
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default AgeStep;
