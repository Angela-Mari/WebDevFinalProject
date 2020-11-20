import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Hub from './components/Hub';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0();
  if (isLoading) return (<div>Loading...</div>)
  return (
    <div>
      <LoginButton/>
      <LogoutButton/>
      <Hub />
    </div>
  );
}

export default App;
