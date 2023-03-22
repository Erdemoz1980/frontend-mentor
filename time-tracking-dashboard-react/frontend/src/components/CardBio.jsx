

const CardBio = ({bio}) => {
  const { img, name } = bio;
  return (
    <main className="card-featured">

      <section className="bio-section">

          <img className="bio-img" src={img} alt="bio" />
     
        <p>Report for</p>
        <h2 className="name">{name}</h2>
      </section>

      <section className="timeframes">
        <ul>
          <li><a href="#">Daily</a></li>
          <li><a href="#">Weekly</a></li>
          <li><a href="#">Monthly</a></li>
        </ul>
      </section>
      
    </main>
  )
}

export default CardBio