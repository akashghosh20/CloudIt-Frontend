import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Junction from './userside/junction'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Viewer from './userside/viewer/viewer';
import Admin from './adminside/admin';
import Signin from './userside/auth/signin';
import SignUp from './userside/auth/signup';
import Client from './userside/Client/client';
import Buypackage from './userside/buypackage/buypackage';
import Requireddetails from './userside/buypackage/requireddetails';

import Home from './adminside/Home/Home';
import Login from './adminside/Login/Login'
import Projects from './adminside/Projects/Projects';
import Aboutus from './userside/aboutus/aboutus';
import Team from './userside/Team/team';
import AddPackages from './adminside/AddPackages/AddPackages';
import PackStat from './adminside/PackageStat/PackStat';
import ClientList from './adminside/ClientList/ClientList';
import EmployeeList from './adminside/employeelist/Employeelist';
import Career from './userside/career/career';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Junction></Junction>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    
    children: [
      {
        path:"/admin/login",
        element: <Login></Login>
      },
      {
        path:"/admin/home",
        element: <Home></Home>
      },
      {
        path:"/admin/projects",
        element: <Projects></Projects>
      },
      {
        path:"/admin/add-pack",
        element: <AddPackages></AddPackages>
      },
      {
        path:"/admin/pack-stat",
        element: <PackStat></PackStat>,
        loader: ()=> fetch('http://localhost:5000/packages'),

      },
 
      {
        path:"/admin/client-ls",
        element: <ClientList></ClientList>
      },
      {
        path:"/admin/employeelist",
        element: <EmployeeList></EmployeeList>
      }, 
      {
        path:"/admin/client-ls",
        element: <ClientList></ClientList>
      }
]
  },
{
  path: "/home",
    element: <Viewer></Viewer>,

  },
{
  path: "/signin",
    element: <Signin></Signin>,
  },
{
  path: "/signup",
    element: <SignUp></SignUp>,
  },

{
  path: "/client",
    element: <Client></Client>,
  },
  {
    path: "/buypackage",
    element: <Buypackage></Buypackage>,
  },
  {
    path: "/requireddetails",
    element: <Requireddetails></Requireddetails>,
  },
  {
    path: "/aboutus",
    element: <Aboutus></Aboutus>,
  },
  {
    path: "/ourteam",
    element: <Team></Team>,
  },
  {
    path: "/career",
    element: <Career></Career>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
