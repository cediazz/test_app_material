import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./utils/userContext";
import Login from './Components/Login/Login';
import './App.css'
import Register from './Components/Register/Register';

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            {/* Routes with Sidebar and Navbar */}
            <Route
              path="/*" /* All Routes inside this Route */
              element={
                <>
                 
                  
                        <Routes>
                         
                        </Routes>
                      
                </>
              }
            />
          </Routes>
        </BrowserRouter>
    </UserProvider>
  );
}

export default App;
