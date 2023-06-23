import BannerComponent from "./components/BannerComponent";
import NavbarComponent from "./components/NavbarComponent";
import FeaturedSection from "./page/FeaturedSection";
import HeroSection from "./page/HeroSection";
import ProductSection from "./page/ProductSection";
import TestimonialsSection from "./page/TestimonialsSection";

    
   
    
export const PAGES = [
  {
    'name': 'Navbar',
    'path': '/name',
    'component': <NavbarComponent />,
  },
  {
    'name': 'Navbar',
    'path': '/name',
    'component': <HeroSection />,
  },
  {
    'name': 'Navbar',
    'path': '/name',
    'component': <BannerComponent text={'take a bite'} />,
  },
  {
    'name': 'Navbar',
    'path': '/name',
    'component':  <FeaturedSection />,
  },
  {
    'name': 'Navbar',
    'path': '/name',
    'component':  <ProductSection />,
  },
  {
    'name': 'Navbar',
    'path': '/name',
    'component':  <TestimonialsSection />,
  },
  
]

export const NAVIGATIONS = ['About', 'Menu', 'Contact'];