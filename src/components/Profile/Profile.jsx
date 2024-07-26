

import PropTypes from 'prop-types';
import css from './Profile.module.css'; 

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <img src={image} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>

        <div className={css.stats}>
        <div className={css.statsItem}>
            <span className={css.statsLabel}>Followers</span>
            <span className={css.statsValue}>{stats.followers}</span>
        </div>
        <div className={css.statsItem}>
            <span className={css.statsLabel}>Views</span>
            <span className={css.statsValue}>{stats.views}</span>
        </div>
        <div className={css.statsItem}>
            <span className={css.statsLabel}>Likes</span>
            <span className={css.statsValue}>{stats.likes}</span>
        </div>
        </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
