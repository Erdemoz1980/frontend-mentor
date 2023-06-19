import JobCard from "../components/JobCard";

const HomePage = ({ data }) => {
  return (
    <div className="homepage-wrapper container">
  
 
        {
          data.map(jobListing => (
            <JobCard key={jobListing.id} {...jobListing} />
          ))
        }

     
    </div>
  )
};

export default HomePage