import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./utils/userContext";


function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
