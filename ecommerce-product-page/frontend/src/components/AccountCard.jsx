import { Link } from 'react-router-dom';

const AccountCard = ({ title, desc, to }) => {

  return (
    <div className='account-card-wrapper'>
      <Link to={to}>
      <h3>{title}</h3>
      <p>{desc}</p>
      </Link>
    </div>
  )
}

export default AccountCard