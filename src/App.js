import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./utils/userContext";
import SidebarExample from './Components/Login/Login';
import './App.css'

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
      <Routes>
            <Route path="/login" element={<SidebarExample />} />
            
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
