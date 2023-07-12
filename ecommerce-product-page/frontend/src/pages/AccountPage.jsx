import AccountCard from '../components/AccountCard';

const AccountPage = () => {

  const accountCardsData = [
    {
      id: 10001,
      title: 'Your Orders',
      desc:'View your order details, track, return or cancel an order'
    },
    {
      id: 10002,
      title: 'Login & Security',
      desc:'Manage password and email'
    },
    {
      id: 10003,
      title: 'Your Address',
      desc: 'Edit your address',
      to:'/user/account/editaddress/'
    }
  ]

  return (
    <div className='container account-page-wrapper'>
      <h1>Your Account</h1>
      <div className="account-page">
        {
          accountCardsData.map(item => (
            <AccountCard key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default AccountPage 