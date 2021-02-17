import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import logoJungle from '_assets/images/jungle.png'
import { getPerfectBMW } from '_modules/car/actions'

import styles from './styles.css'

const App = () => {
  // const car = useSelector(state => state.car)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPerfectBMW())
  }, [dispatch])

  function handleSubmit() {
    navigate('/user')
  }

  return (
    <div className={styles.card}>
      <img src={logoJungle} alt="Logo Jungle Devs" className={styles.logo} />
      {/* <img
        src="_assets/images/jungle-devs-logo.png"
        srcSet="_assets/images/jungle-devs-logo@2x.png 2x,
        _assets/images/jungle-devs-logo@3x.png 3x"
        alt="Logo Jungle Devs"
        className={styles.logo}
      /> */}

      <form onSubmit={handleSubmit}>
        <input placeholder="Email" className={styles.bounds} />
        <input placeholder="Password" type="password" className={styles.bounds} />
        <button type="submit">Login</button>
      </form>
    </div>
    // <div className={styles.App}>
    //   <header className={styles['App-header']}>
    //     <img src={BMW} alt="BMW" className={styles['App-logo']} />
    //     <h1 className={styles['App-title']}>Jungle Devs Boilerplate</h1>
    //   </header>

    //   {car.marca ? (
    //     <p
    //       className={styles['App-intro']}
    //     >{`The ${car.marca} ${car.modelo} ${car.anoModelo} - ${car.combustivel} (FIPE ${car.codigoFipe}) was evaluated at ${car.valor}`}</p>
    //   ) : (
    //     <p className={styles['App-intro']}>Loading...</p>
    //   )}
    // </div>
  )
}

export default React.memo(App)
