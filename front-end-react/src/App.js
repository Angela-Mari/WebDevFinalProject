import './App.css';
import LoginButton from './components/LoginButton';
import Hub from './components/Hub';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0();
  if (isLoading) return (<div>Loading...</div>)
  return (
    <div>
      
      <LoginButton/>
          
        
      <Hub />
    </div>
  );
}

export default App;
