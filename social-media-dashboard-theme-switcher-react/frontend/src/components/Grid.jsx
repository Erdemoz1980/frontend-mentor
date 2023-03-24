
const Grid = ({data, component:Component}) => {
  return (
    <div className="dashboard">
      {
        data.map(profile => (
          <Component profile={profile} key={profile.id} />
        ))
      }
    </div>
  )
}

export default Grid