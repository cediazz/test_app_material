import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./utils/userContext";
import Login from './Components/Login/Login';
import './App.css'
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Customers from './Components/Customers/Customers';
import Welcome from './Components/Welcome/Welcome';
import Grid from '@mui/material/Grid2'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/colors';
import Page404 from './Components/Page404/Page404';

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
              <ThemeProvider theme={theme}>
                <Grid container >
                  <Grid item size={{ xs: 12, md: 3, lg: 3 }}>
                    <Home />
                  </Grid>
                  <Grid item size={{ xs: 12, md: 9, lg: 9 }} sx={{ marginTop: 8 }} >
                  
                      <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/error404" element={<Page404 />} />
                      </Routes>
                    
                  </Grid>
                </Grid>
              </ThemeProvider>

            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
