import upIcon from '../images/icon-up.svg';
import downIcon from '../images/icon-down.svg';

const Grid = ({ data, component: Component, darkTheme }) => {
  const icons = {
    upIcon,
    downIcon
  }
  return (
    <div className="dashboard">
      {
        data.map(profile => (
          <Component profile={profile} key={profile.id} icons={icons} darkTheme={darkTheme} />
        ))
      }
    </div>
  )
}

export default Grid