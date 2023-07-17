import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { useContext } from "react";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { UsersProvider } from "./context/members/context";

function App() {
  const currentTheme = useContext(ThemeContext);

  return (
    <div
      className={`h-full w-full mx-auto py-2 ${
        currentTheme.theme === "dark" ? "dark" : ""
      }`}
    >
      <ProjectsProvider>
        <UsersProvider>
          <RouterProvider router={router} />
        </UsersProvider>
      </ProjectsProvider>
    </div>
  );
}

export default App;
