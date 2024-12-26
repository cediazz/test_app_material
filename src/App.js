import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./utils/userContext";
import Login from './Components/Login/Login';
import './App.css'
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Customers from './Components/Customers/Customers';
import { Box } from '@mui/material'
import Welcome from './Components/Welcome/Welcome';
import Grid from '@mui/material/Grid2'
import Sidebar from './Components/Home/Sidebar'

function App() {

  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Routes with Sidebar and Navbar */}
        <Route
          path="/*" /* All Routes inside this Route */
          element={
            <Grid container>
              <Grid item size={3} >
              <Home />
              </Grid>
              <Grid item size={9} >
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/customers" element={<Customers />} />
                </Routes>
              </Grid>
              </Grid>
              
          }
        />
      </Routes>
    </BrowserRouter>
  </UserProvider>
  );
}

export default App;
