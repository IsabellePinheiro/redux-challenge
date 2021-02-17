import React from 'react'
import { Link } from '@reach/router'

import logo from '../../assets/images/jungle-devs-logo.svg'

import styles from './styles.css'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" color="#fff" />
      <Link to="/user" className={styles.linkSignOut}>
        Sign out
      </Link>
    </header>
  )
}

export default React.memo(Header)
