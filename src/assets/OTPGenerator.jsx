import { useState, useEffect } from "react";

export const OTPGenerator = () => {
  const [password, setPassword] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const handleClick = () => {
    // Generate 6-digit OTP (digits 1–9)
    let newPassword = "";
    for (let i = 0; i < 6; i++) {
      newPassword += Math.floor(Math.random() * 9) + 1;
    }

    setPassword(newPassword);
    setTimeLeft(5); // 10 seconds expiry

  };

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
      
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  
  return (
    <div className="container">

      <h2 id="otp-display">
        {password.length > 0
          ? password
          : "Click 'Generate OTP' to get a code"}
      </h2>

       <p id="otp-timer" aria-live="assertive">
        {password && timeLeft > 0
          ? `Expires in: ${timeLeft} seconds`
          : password && timeLeft === 0
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button onClick={handleClick} disabled = {timeLeft > 0} id="generate-otp-button">
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator