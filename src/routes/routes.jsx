import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { AccountNumber, BookAppointment, SignIn_page, SignUp_page, Welcome_page } from "../pages";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Welcome_page />,
      },
      {
        path: "/signIn_page",
        element: <SignIn_page />,
      },
      {
        path: "/signUp_page",
        element: <SignUp_page />,
      },
      {
        path: "/bookAppointment",
        element: <BookAppointment/>,
      },
      {
        path: "/accountNumber",
        element: <AccountNumber/>,
      },
    ],
  },
]);

export default routes;
