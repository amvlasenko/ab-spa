import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import NotFound from '../Components/NotFound/NotFound';

export const userRoutes = [
   {path: 'ab-spa/home', component: <Home/>},
   {path: 'ab-spa/about', component: <About/>},
   {path: '*', component: <NotFound/>},
];