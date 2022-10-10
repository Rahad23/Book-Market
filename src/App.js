import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Slider from './component/slider/Slider';
import Comon from './component/comonHeader/Comon';
import Error from './component/errorPage/Error';
import Book from './component/cardBook/Book';
import Details from './component/bookDetails/Details';
import Register from './component/registration/Registration';
import Features from './component/features/Features';
import Pricing from './component/pricing/Pricing';
import AboutUs from './component/aboutUs/AboutUs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Comon></Comon>,
      errorElement: <Error></Error>,
      children:[
        {
          path: "/",
          element: <Slider></Slider>
        },
        {
          path: "/books",
          loader: async()=>{
            return fetch('https://api.itbook.store/1.0/new');
          },
          element: <Book></Book>
        },
        
        {
          path: "/books/details/:id",
          element: <Details></Details>,
          loader: async({params})=>{
            return fetch(`https://api.itbook.store/1.0/books/${params.id}`)
          },
         
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/features",
          element: <Features></Features>,
        },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
