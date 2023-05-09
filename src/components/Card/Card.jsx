import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

export default function Card({ following, userData, onToggleFollow }) {
  const [followersCount, setFollowersCount] = useState(
    () =>
      Number(localStorage.getItem(`followersCount_${userData.id}`)) ||
      userData.followers
  );

  Card.propTypes = {
    following: PropTypes.bool,
    userData: PropTypes.object.isRequired,
    onToggleFollow: PropTypes.func.isRequired,
  };

  useEffect(() => {
    localStorage.setItem(`followersCount_${userData.id}`, followersCount);
  }, [followersCount, userData.id]);

  function handleFollowClick() {
    if (following) {
      setFollowersCount((prevState) => prevState - 1);
    } else {
      setFollowersCount((prevState) => prevState + 1);
    }
    onToggleFollow(userData.id);
  }

  return (
    <div className={styles.card}>
      {userData && (
        <>
          <img
            className={styles.logo}
            src="../../../public/images/vector.svg"
            alt="logo"
          />
          <img
            className={styles.decor}
            src="../../../public/decoration.png"
            alt="decoration"
          />
          <img className={styles.avatar} src={userData.avatar} alt="avatar" />
          <img
            className={styles.rectangle}
            src="../../../public/images/rectangle.svg"
            alt="rectangle"
          />
          <div className={styles.bottom}>
            <p className={styles.name}> {userData.user}</p>
            <p className={styles.paragraph}> {userData.paragraph}</p>
            <div className={styles.items}>
              <ul className={styles.tweets}>
                <li className={styles.number}>{userData.tweets}</li>
                <h4 className={styles.text}>TWEETS</h4>
              </ul>
              <ul className={styles.followers}>
                <li className={styles.number}>{followersCount}</li>
                <h4 className={styles.text}>FOLLOWERS</h4>
              </ul>
            </div>
            <button
              className={following ? styles.buttonFollowing : styles.button}
              onClick={handleFollowClick}
            >
              {following ? "" : "Follow"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
