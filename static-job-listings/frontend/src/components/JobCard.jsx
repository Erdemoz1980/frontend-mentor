import KeywordTablet from "./KeywordTablet"

const JobCard = ({ company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools }) => {

  const keywords = [role, level, ...languages, ...tools];

  return (

    <main className={`job-card-wrapper ${featured?'featured':''} container`}>

      <div className="job-card-body">
        <section className="job-description-container">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="job-description-body">
            <div className="job-header-container">
              <p className="company-name subhead1">{company}</p>
              <div className="new-featured-container">
                {isNew && <p className="tab1 tab-new">NEW!</p>}
                {featured && <p className="tab1 tab-featured ">FEATURED</p>}
              </div>
            
            </div>
            <h2 className="job-position">{position}</h2>
            <div className="job-description-footer">
              <p className="posted-at-info">{postedAt}</p>
              <p className="contract-info">{contract}</p>
              <p className="location-info">{location}</p>
            </div>
          </div>
        </section>
        <section className="keywords-container">
          {keywords.map((item, index) => (
            <KeywordTablet key={index} keyword={item} />
          ))}
        </section>
      </div>
    </main>

  )
};

export default JobCard