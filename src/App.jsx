import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills'
import data from "./data.json";

export const App = () => {
  return <div>
    <Hero />
    <Skills />
    <FeaturedProjects />
  </div>
}
