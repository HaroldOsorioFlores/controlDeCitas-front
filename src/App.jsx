import "./App.css";
import routes from "./routes/routes"
import {  RouterProvider } from "react-router-dom";
import 'normalize.css';
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
