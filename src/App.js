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
                  <Grid item size={3}>
                    <Home />
                  </Grid>
                  <Grid item size={9} sx={{ marginTop: 8 }} >
                    <Box
                      sx={{
                        bgcolor: 'white',
                        borderRadius: '8px',
                        boxShadow: 3,
                        p: 3,
                        marginTop: 3,
                        width: {
                          xs: '300px',
                          sm: '400px',
                          md: '500px',
                          lg: '1000px',
                          xl: '1000px'
                        },
                        mx: 'auto'
                      }}
                    >
                      <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/customers" element={<Customers />} />
                      </Routes>
                    </Box>
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
