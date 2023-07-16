import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import Header from "./Header";
import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";

function App() {
  const location = useLocation();

  const dontShowHeader = ["/signin", "/notfound"];

  return (
    <div>
      {!dontShowHeader.includes(location.pathname) && <Header />}

      <Routes>
        <Route path='/' element={<ProtectedRoute element={<HomePage />} />} />
        <Route
          path='/tasks'
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route
          path='/tasks/:id'
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path='/signin' element={<Signin />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/notfound' />} />
      </Routes>
    </div>
  );
}

export default App;
