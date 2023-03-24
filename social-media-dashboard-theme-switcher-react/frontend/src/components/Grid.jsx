import upIcon from '../images/icon-up.svg';
import downIcon from '../images/icon-down.svg';

const Grid = ({ data, component: Component, }) => {
  const icons = {
    upIcon,
    downIcon
  }
  return (
    <div className="dashboard">
      {
        data.map(profile => (
          <Component profile={profile} key={profile.id} icons={icons} />
        ))
      }
    </div>
  )
}

export default Grid