import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./page/HomePage";

export const PAGES = [
  {
    'name': 'Navbar',
    'path': '/name',
    'component': <NavbarComponent />,
  },
  {
    'name': 'Home',
    'path': '/home',
    'component': <HomePage />,
  },
]

export const NAVIGATIONS = ['About', 'Menu', 'Contact'];