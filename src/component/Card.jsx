import './Card.css'

function Card({image,name,post,followers,following}) {
  return (
  <>
    <div className="card">
  <div className="profile_section">
    <div className="roung_img_main">
      <img src={image} alt="img" className="img" />
    </div>
  </div>
  <div className="content_main_container">
    <div className="content">
      <h2 className='user_name'>{name}</h2>
      <p>{post}</p>
    </div>
  </div>
  <div className="social_networking_main">
    <div className="followers">
      <h1>{followers}</h1>
      <p className='follower_p_color'>Followers</p>
    </div>
    <div className="following">
      <h1>{following}</h1>
      <p className='following_p_color'>Following</p>
    </div>
  </div>
  <div className="button_main">
    <div className="left_button">Follow</div>
    <div className="right_button">Message</div>
  </div>
 
</div>

  </>
  )
}

export default Card