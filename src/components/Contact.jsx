import { Socials } from "./Socials";
import { HeroImage } from "./HeroImage";

export const ContactCard = () => {
  return <div className="contact-card">
    <HeroImage />
    <div className="contact-details">
      <h2>Let's Talk</h2>
      <p>Evelinn Idenfors</p>
      <p>evelinn.idenfors@gmail.com</p>
      <Socials />
    </div>
  </div>
}