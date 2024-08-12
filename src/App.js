// import './App.css';
// import { TodoWrapper } from './components/TodoWrapper';

// function App() {
//   return (
    
//     <div className="App">
//              <header className="App-header">
//   <h1>Todo List Application</h1>
// </header>
      
      
//       <TodoWrapper  />
//       <footer className="App-footer">
//   <p>Created by Haniya Shafiq</p>
// </footer>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false); // Ensure only one modal is open at a time
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false); // Ensure only one modal is open at a time
  };

  const handleCloseModals = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List Application</h1>
        <div className="auth-buttons">
          <button className="auth-btn" onClick={handleLoginClick}>
            Login
          </button>
          <button className="auth-btn" onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </header>

      <TodoWrapper />

      <footer className="App-footer">
        <p>Created by Haniya Shafiq</p>
      </footer>

      {showLogin && <LoginForm onClose={handleCloseModals} />}
      {showSignUp && <SignUpForm onClose={handleCloseModals} />}
    </div>
  );
}

export default App;
