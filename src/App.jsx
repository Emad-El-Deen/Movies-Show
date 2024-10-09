import { useState } from "react";
import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from './Components/Movies/Movies';
import Home from './Components/Home/Home';
import TvShows from './Components/TvShows/TvShows';
import More from './Components/More/More';
import People from './Components/People/People';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
function App() {
  let router=createBrowserRouter([{ path: "", element: <Layout />, children: [
    {index:true,element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'movies',element:<Movies/>},
    {path:'tvshows',element:<TvShows/>},
    {path:'people',element:<People/>},
    {path:'login',element:<Login/>},
    {path:'register',element:<Register/>},
    {path:'*',element:<NotFound/>},
  ]

   }]);
  return <>
  
  <RouterProvider router={router}></RouterProvider>

  </>;
}

export default App;
