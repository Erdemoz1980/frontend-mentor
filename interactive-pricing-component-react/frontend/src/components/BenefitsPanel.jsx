import IconCheck from "./IconCheck"

const BenefitsPanel = () => {
  return (
    <div className="benefits-panel">
      <ul className="benefits-list">
        <li className="benefits-item text">
          <IconCheck/>Unlimited websites</li>
        <li className="benefits-item text">
        <IconCheck/>100% data ownership</li>
        <li className="benefits-item text">
        <IconCheck/>Email reports</li>
    </ul>
       
      <div className="btn">Start my trial</div>
    </div>
  )
}

export default BenefitsPanel