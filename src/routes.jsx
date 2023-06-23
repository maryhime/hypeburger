import BannerComponent from "./components/BannerComponent";
import NavbarComponent from "./components/NavbarComponent";
import CTABlock from "./page/CTABlock";
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
    'name': 'Hero Section',
    'path': '/name',
    'component': <HeroSection />,
  },
  {
    'name': 'Banner',
    'path': '/name',
    'component': <BannerComponent text={'take a bite'} />,
  },
  {
    'name': 'Featured Section',
    'path': '/name',
    'component':  <FeaturedSection />,
  },
  {
    'name': 'Product Section',
    'path': '/name',
    'component':  <ProductSection />,
  },
  {
    'name': 'Testimonials',
    'path': '/name',
    'component':  <TestimonialsSection />,
  },
  {
    'name': 'Banner',
    'path': '/name',
    'component': <BannerComponent text={'take a bite'} />,
  },
  {
    'name': 'CTA Block',
    'path': '/name',
    'component': <CTABlock />,
  },
  
]

export const NAVIGATIONS = ['About', 'Menu', 'Contact'];