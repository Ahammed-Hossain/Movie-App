import React, { useEffect, useState } from "react";

export default function SignInpage({
  open,
  onClose,
  isSignUp,
  setIsSignUp,
  formData,
  setFormData,
}) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    if (open) setVisible(true);
    else {
      const timeout = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!visible) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (isSignUp) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === formData.email);
    if (exists) {
      setMessage("User already exists. Try logging in.");
      setMessageType("error");
    } else {
      users.push({ ...formData });
      localStorage.setItem("users", JSON.stringify(users));
      setMessage("Sign Up successful! You can now log in.");
      setMessageType("success");

      // Clear inputs
      setFormData({ email: "", password: "", userName: "" });

      // Switch to log in
      setIsSignUp(false);
    }
  } else {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );
    if (user) {
      setMessage(`Welcome back, ${user.userName || "User"}!`);
      setMessageType("success");

      // Clear inputs after successful log in
      setFormData({ email: "", password: "", userName: "" });

      // Close modal after a short delay
      setTimeout(() => {
        onClose();
        setMessage("");
        setMessageType("");
      }, 1000);
    } else {
      setMessage("Invalid email or password.");
      setMessageType("error");
    }
  }
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Box */}
      <div
        className={`relative z-10 w-11/12 max-w-[28rem] h-[28rem] bg-white rounded-2xl shadow-2xl p-6
                    flex flex-col justify-between transform transition-all duration-500
                    ${
                      open
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-full opacity-0 scale-95"
                    }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {isSignUp ? "Sign Up" : "Log in"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          className="flex-1 flex flex-col justify-center gap-3"
          onSubmit={handleSubmit}
        >
          {isSignUp && (
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-300"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-300"
            required
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            {isSignUp ? "Sign Up" : "Log in"}
          </button>
        </form>

        {message && (
          <p
            className={`text-center text-sm ${
              messageType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Bottom switch buttons */}
        <div className="text-sm text-center text-gray-500">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-indigo-600 font-semibold ml-1"
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Log in" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
