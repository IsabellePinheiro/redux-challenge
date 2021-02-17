import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import userPicture from '_assets/images/user-picture.png'
import { getPerfectBMW } from '_modules/car/actions'
import Header from '_components/Header'

import styles from './styles.css'

const Main = () => {
  // const car = useSelector(state => state.car)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPerfectBMW())
  }, [dispatch])
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1> You&apos;re logged in as:</h1>
        </div>
        <div className={styles.maskLogo}>
          <img src={userPicture} alt="User" className={styles.logo} />
        </div>
        <div className={styles.name}>
          <h3>Isabelle Pinheiro</h3>
        </div>
        <div className={styles.email}>
          <p>isabellepinheiro00@gmail.com</p>
        </div>
        <p>USER ID: 57</p>
        <div className={styles.formChangeName}>
          <b>Change your name here:</b>
          <form>
            <input placeholder="Type your new name here..."></input>
            <button type="button">Change Name</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default React.memo(Main)
