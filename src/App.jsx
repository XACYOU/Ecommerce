import { useContext } from "react";
import AllRoutes from "./router/AllRoutes";
import { context } from "./context/data/Context";

const App = () => {
  const { theme } = useContext(context);

  return (
    <div
      data-theme={theme}
      className=" font-serif w-full max-w-screen h-[100vh] overflow-x-hidden transition-all duration-1000"
    >
      <AllRoutes />
    </div>
  );
};

export default App;
