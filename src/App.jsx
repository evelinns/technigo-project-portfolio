import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills'
import { ContactCard } from './components/Contact';

export const App = () => {
  return <div>
    <Hero />
    <Skills />
    <FeaturedProjects />
    <ContactCard />
  </div>
}
