import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AddPackages from './adminside/AddPackages/AddPackages';
import Admin from './adminside/admin';
import AdminList from './adminside/AdminList/AdminList';
import ClientList from './adminside/ClientList/ClientList';
import Coupon from './adminside/Coupons/Caoupon';
import EmployeeList from './adminside/employeelist/Employeelist';
import Faqall from './adminside/Faq/Faq';
import Home from './adminside/Home/Home';
import Login from './adminside/Login/Login';
import PackStat from './adminside/PackageStat/PackStat';
import ProjectsTable from './adminside/Projects/ProjectsTable';
import Reviews from './adminside/Reviews/Reviews';
import './index.css';
import Aboutus from './userside/aboutus/aboutus';
import Signin from './userside/auth/signin';
import SignUp from './userside/auth/signup';
import Buypackage from './userside/buypackage/buypackage';
import Requireddetails from './userside/buypackage/requireddetails';
import Career from './userside/career/career';
import Client from './userside/chat/clientchat';
import Junction from './userside/junction';
import Team from './userside/Team/team';
import Viewer from './userside/viewer/viewer';




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
        element: <ProjectsTable></ProjectsTable>
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
        path:"/admin/reviews",
        element: <Reviews></Reviews>,
        loader: ()=> fetch('http://localhost:5000/review'),

      },
      {
        path:"/admin/faq",
        element: <Faqall></Faqall>,
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
        path:"/admin/admin-ls",
        element: <AdminList></AdminList>
      }, 
      {
        path:"/admin/coupon",
        element: <Coupon></Coupon>,
        loader: ()=> fetch('http://localhost:5000/coupon'),

      }, 
      
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
    element: <ClientList></ClientList>,
  },
{
  path: "/cchat",
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
