
const FilterBox = ({keywords, setKeywords}) => {

  return (
    <div className='filterbox-wrapper'>
      <div className="keywords-wrapper">
        {keywords.map((keyword, index) => (
          <div className="keywords-tabs-wrapper">
            <div key={index} className="tab">{keyword}
            </div>
            <button className="btn tab tab-close" onClick={()=>setKeywords(prevKeywords=>prevKeywords.filter(item=>item!==keyword))}>X</button>
          </div>
         
      ))}
      </div>
      
      <button className="btn tab" onClick={()=>setKeywords([])}>Clear</button>
    </div>
  )
}

export default FilterBox