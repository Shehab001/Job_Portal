import { createBrowserRouter, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import TopCompany from "../components/TopCompany";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import About from "../components/About";
import ContacUs from "../components/ContacUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contactus",
        element: <ContacUs></ContacUs>,
      },
      //   {
      //     path: "/purchase",
      //     element: <Success></Success>,
      //   },
      //   {
      //     path: "/cart",
      //     element: (
      //       <PrivateRoute>
      //         <Cart></Cart>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/category/:id",
      //     element: <Card></Card>,
      //     loader: ({ params }) =>
      //       fetch(`https://brins-server.vercel.app/category/${params.id}`),
      //   },
      {
        path: "*",
        element: <h1 className="text-6xl text-center m-20">404 Not Found</h1>,
      },
    ],
  },
]);

export default router;
