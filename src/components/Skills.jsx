import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
  const skillsData = [
    {
      title: "Code",
      items: ["HTML5", "CSS3", "JavaScript ES6", "React", "Styled Components", "Github"]
    }
  ];
  const toolBoxData = [
    {
      title: "Toolbox",
      items: ["Atom", "Postman", "Adobe Photoshop", "Adobe Illustrator", "Lightroom", "Figma", "Slack"]
    }
  ]
  const upcomingData = [
    {
      title: "Upcoming",
      items: ["Node.js"]
    }
  ]
  const moreData = [
    {
      title: "More",
      items: ["Branding", "Strategy", "Process Design", "Concept", "Development", "Agile Methodology"]
    }
  ]

  return <div>
      <h2>Skills</h2>
      <div className="skills-wrapper">
        {skillsData.map((skill, index) => (
          <SkillsCard key={index} title={skill.title} items={skill.items} />
        ))}
        {toolBoxData.map((skill, index) => (
          <SkillsCard key={index} title={skill.title} items={skill.items} />
        ))}
        {upcomingData.map((skill, index) => (
          <SkillsCard key={index} title={skill.title} items={skill.items} />
        ))}
        {moreData.map((skill, index) => (
          <SkillsCard key={index} title={skill.title} items={skill.items} />
        ))}
      </div>
    </div>
}