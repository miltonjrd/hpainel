// dependencies
import { useRef, useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { SWRConfig } from "swr";
import styled from "styled-components";
import { api, useApi } from './api';

//components
import BudgetRequest from "./pages/BudgetRequest";

// context
import UserContext from "./context/UserContext";

import AppRoutes from "./AppRoutes";

import './style.scss';

const StartingAppScreen = styled.div`
  &.fadeout {
    animation: fadeout .7s 1;
  }

  @keyframes fadeout {
    to {
      opacity: 0
    }
  }
`;

const App = () => {
  const [user, setUser] = useState(null);
  const [isStarting, setIsStarting] = useState(true);
  const { data, error } = useApi('auth/admin');
  
  const startingAppScreenRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isStarting) {
      if (!user)
        navigate('/login');
      else
        navigate('/');

      startingAppScreenRef.current.classList.add('fadeout');
      setTimeout(() => {
        startingAppScreenRef.current.remove();
      }, 700);
    }
  }, [isStarting]);

  useEffect(() => {
    console.log(data)
    if (data) {
      setUser(data);
      setIsStarting(false);
    }

    if (error)
      setIsStarting(false);
  }, [data, error]);

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false
      }}
    >
      <UserContext.Provider
        value={{
          context: user,
          setContext: setUser
        }}
      >
        <StartingAppScreen ref={startingAppScreenRef} className="d-flex h-100 w-100 bg-dark">
          <h1 className="w-100 text-white text-center align-self-center">HPainel</h1>
        </StartingAppScreen> 
        <AppRoutes /> 
        
      </UserContext.Provider>
    </SWRConfig>
  );
};

export default App;
