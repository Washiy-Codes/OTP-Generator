import "./index.css"
import OTPGenerator from "./assets/OTPGenerator";

const App = () => {
  
  return (
    <div className="app">
      <h1 id="otp-title">OTP Generator</h1>
      <OTPGenerator />
    </div>
  );
};

export default App;