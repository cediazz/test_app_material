import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./utils/userContext";
import Login from './Components/Login/Login';
import './App.css'
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Customers from './Components/Customers/Customers';
import Welcome from './Components/Welcome/Welcome';
import Grid from '@mui/material/Grid2'
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/colors';
import Page404 from './Components/Page404/Page404';
import CustomersMaintenance from './Components/Customers/CustomersMaintenance';
import { NotificationProvider } from './utils/notificationContext';


function App() {

  return (
    <NotificationProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Routes with Sidebar and Navbar */}
            <Route
              path="/*" /* All Routes inside this Route */
              element={

                <Grid container >
                  <Grid item size={{ xs: 12, md: 3, lg: 3 }}>
                    <Home />
                  </Grid>
                  <Grid item size={{ xs: 12, md: 9, lg: 9 }} sx={{ marginTop: 8 }} >

                    <Routes>
                      <Route path="/" element={<Welcome />} />
                      <Route path="/customers" element={<Customers />} />
                      <Route path="/customer-maintenance/:custId?" element={<CustomersMaintenance />} />
                      <Route path="/error404" element={<Page404 />} />
                    </Routes>

                  </Grid>
                </Grid>


              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </NotificationProvider>

  );
}

export default App;
