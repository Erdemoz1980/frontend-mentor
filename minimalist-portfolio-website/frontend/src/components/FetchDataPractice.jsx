import { useEffect, useState } from 'react';

const FetchDataPractice = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=20')
    const jsonData = await response.json()
    setData(jsonData.results)
  } catch (err) {
    console.error(err)
    
  }
}


  useEffect(() => {
 fetchData()
  }, [])
  
  console.log(data)


  return (
    <div className='container'>
      <ul className='profile-name-list'>
        {
          data.map(profile => (
            <li key={profile.cell}>{profile.name.first} {profile.name.last}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FetchDataPractice