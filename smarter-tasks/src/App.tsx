import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Header from "./Header";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";

function App() {
  const location = useLocation();

  const dontShowHeader = ["/", "/signin", "/signup", "/notfound"];

  return (
    <div>
      {!dontShowHeader.includes(location.pathname) && <Header />}

      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route
          path='/dashboard'
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/notfound' />} />
      </Routes>
    </div>
  );
}

export default App;
