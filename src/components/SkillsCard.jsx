export const SkillsCard = ({title, items}) => {
  return <div className="skills-container">
    <h4>{title}</h4>
    <ul>
      {items && items.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  </div>
}