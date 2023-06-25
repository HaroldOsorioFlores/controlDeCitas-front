import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import {
  AccountNumber,
  BookAppointment,
  ConfirmCite,
  KnowUs,
  MakePayPage,
  SignIn_page,
  SignUp_page,
  Welcome_page,
} from "../pages";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <KnowUs />,
      },
      {
        path: "/signIn_page",
        element: <SignIn_page />,
      },
      {
        path: "/welcome_page",
        element: <Welcome_page />,
      },
      {
        path: "/signUp_page",
        element: <SignUp_page />,
      },
      {
        path: "/bookAppointment",
        element: <BookAppointment />,
      },
      {
        path: "/accountNumber",
        element: <AccountNumber />,
      },
      {
        path: "/confirmCite",
        element: <ConfirmCite />,
      },
      {
        path: "/makePayPage",
        element: <MakePayPage />,
      },
    ],
  },
]);

export default routes;
