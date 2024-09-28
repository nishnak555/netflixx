import { useRoutes } from "react-router-dom";
import CustomButton from "./components/button";

import ROUTES from "./utils/routes";
import { Render } from "./components/render";

function App() {
  const routes = useRoutes([
    {
      path: ROUTES.BUTTON,
      element: <CustomButton />,
    },
    {
      path: ROUTES.RENDER,
      element: <Render/>,
    },
    
  ]);
  return routes;
}

export default App;
