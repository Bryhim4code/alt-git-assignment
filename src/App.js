import { BrowserRouter } from "react-router-dom";
import LandingRoutes from "./layout/LandingRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <LandingRoutes />
    </BrowserRouter>
  );
};

export default App;