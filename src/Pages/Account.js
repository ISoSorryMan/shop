import React, { useState } from 'react';
import '../css/account.css';

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="login-page">
      <div className={`form ${isLogin ? 'form-slide-up' : 'form-slide-down'}`}>
        {/* Form fields for login */}
        {isLogin && (
          <>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">
              Not registered? <a onClick={toggleForm}>Create an account</a>
            </p>
          </>
        )}

        {/* Form fields for registration */}
        {!isLogin && (
          <>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a onClick={toggleForm}>Sign In</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
