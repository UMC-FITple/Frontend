import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import UserInfoPage from "../pages/UserInfoPage/UserInfoPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path='/' element={<SignupPage/>}/>
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  )
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App


// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
