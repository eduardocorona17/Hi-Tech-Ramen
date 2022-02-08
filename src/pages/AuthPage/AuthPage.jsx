import { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true); 
  return (
    <main>
      <h1 className="auth-text">Sign up or Log in!</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}