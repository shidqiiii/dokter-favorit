import React from 'react'
import Routing from "./Routes/Routing";

// const ProtectedRoute = ({ auth, element: Element, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={() => auth ? (<Element />) : (<Navigate to="/login" replace />)}
//     />
//   )
// }

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/Login" element={<LoginPage />} />
    //     <Route path="/Register" element={<RegisterPage />} />

    //     {/* Middleware */}
    //     <ProtectedRoute path="/Dashboard" auth={false} element={<DashboardPage />} />
    //     <Route path="/Appointment" element={<AppointmentPage />} />
    //     <Route path="/doctor" element={<DoctorListPage />} />
    //     <Route path="/doctor/:key" element={<DoctorDetailPage />} />
    //     <Route path="/history" element={<HistoryPage />} />

    //     <Route path="*" element={<NotFoundPage replace to="/404" />} />
    //   </Routes>
    // </Router>
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
