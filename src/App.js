import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './components/ShopAll/Shop';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/contact',
		element: <ContactUs />,
	},
  {
		path: '/about',
		element: <About />,
	},
  {
		path: '/shop',
		element: <Shop />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};


export default App;
