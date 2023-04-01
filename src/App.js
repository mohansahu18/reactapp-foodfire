import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body"
import FooterComponent from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
// import Profile from "./component/Profile";
import Shimmer from "./component/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Card from "./component/card";


// import Instamart from "./component/instamart";
import ProfileClass from "./component/profileClass";
// LAZY LOADING
const Instamart = lazy(() => import("./component/instamart"))
const AppLayout = () => {
  return (
    <React.StrictMode >
      <div className="flex flex-col" >
        <Provider store={store}>
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
        </Provider>
      </div>
    </React.StrictMode>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            // path: "profile",
            // element: <Profile />,
            // element: <ProfileClass name={"mohan"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: (<Suspense fallback={<Shimmer />}>
          <Instamart />
        </Suspense>)
      },
      {
        path: "/card",
        element: <Card />
      },


    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
