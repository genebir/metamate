import type { Component } from 'solid-js';
import './styles/App.css'
import RoundCard from "./components/common/roundCard";


const App: Component = () => {

  return (
    <>
      <div class={'app'}>
          <RoundCard style={'height: 670px; width: 300px;'}>
              <img src={'/src/assets/cw_logo.png'} alt={"써티웨어 로고 이미지"} aria-label={'써티웨어 로고 이미지'} style={'width: 150px;'}/>
          </RoundCard>
      </div>
    </>
  );
  
};

export default App;
