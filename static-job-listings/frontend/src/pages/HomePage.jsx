import JobCard from "../components/JobCard";

const HomePage = ({ filteredList }) => {
  return (
    <div className="homepage-wrapper container">
  
 
        {
          filteredList.map(jobListing => (
            <JobCard key={jobListing.id} {...jobListing} />
          ))
        }

     
    </div>
  )
};

export default HomePage