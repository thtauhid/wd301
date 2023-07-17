import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { useContext } from "react";
import { ThemeContext } from "./context/theme";

function App() {
  const currentTheme = useContext(ThemeContext);

  return (
    <div
      className={`h-full w-full mx-auto py-2 ${
        currentTheme.theme === "dark" ? "dark" : ""
      }`}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
