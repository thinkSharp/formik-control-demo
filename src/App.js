import React, {useState} from 'react';
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import EnrollmentForm from './components/EnrollmentForm';
import { theme, ThemeProvider } from '@chakra-ui/core';

function App() {
  const [message, setMessage] = useState('')


  const onFromMessage = (msg) => {
    setMessage(msg)
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <LoginForm toMessage={message} onFromMessage={onFromMessage} />
      <EnrollmentForm toMessage={message} onFromMessage={onFromMessage}/>
      <RegistrationForm toMessage={message} onFromMessage={onFromMessage}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
