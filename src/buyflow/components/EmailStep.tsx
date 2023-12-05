import React, { useState } from 'react';

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = ({ cb }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    if (!email.trim()) {
      setError('Email is required');
    } else if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
    } else {
      setError(null);
      cb('email', email);
    }
  };

  const isValidEmail = (email: string) => {
    // Basic email validation regex or use a library for more comprehensive validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          placeholder="Enter your email"
          onChange={({ target: { value } }) => {
            setEmail(value);
            setError(null);
          }}
          value={email}
          aria-label="Enter your email"
          aria-invalid={!!error}
          aria-describedby={error ? 'email-error' : ''}
        />
        {error && (
          <p style={{ color: 'red' }} role="alert">
            {error}
          </p>
        )}
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default EmailStep;
