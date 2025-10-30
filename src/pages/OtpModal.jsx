import React, { useState, useEffect, useRef } from "react";

const OtpModal = ({ isOpen, onClose }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0)
      inputRefs.current[index - 1].focus();
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(30);
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded-2xl shadow-xl w-[400px] text-center">
        <h2 className="text-2xl font-semibold mb-2">Enter OTP</h2>
        <p className="text-gray-500 text-sm mb-6">
          We’ve sent a 6-digit code to your email
        </p>

        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          ))}
        </div>

        <button
          className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition"
        >
          Verify
        </button>

        <p className="text-sm text-gray-600 mt-4">
          Didn’t receive the OTP?{" "}
          {timer > 0 ? (
            <span className="text-gray-400">Resend in {timer}s</span>
          ) : (
            <button
              onClick={handleResend}
              className="text-orange-500 font-medium hover:underline"
            >
              Resend
            </button>
          )}
        </p>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
