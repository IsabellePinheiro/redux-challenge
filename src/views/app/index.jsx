import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { navigate } from '@reach/router'

import logoJungle from '_assets/images/jungle.png'
import { login } from '_modules/authentication/actions'
import { getUser } from '_modules/user/actions'

import styles from './styles.css'

export const CANNOT_FIND_USER_ERROR = 'Cannot find user'

const App = () => {
  const [isLogged, setIsLogged] = useState(false)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [isInvalidUser, setIsInvalidUser] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = useCallback(
    async data => {
      setLoading(true)
      const response = await dispatch(login(data))
      setLoading(false)
      if (response?.action?.payload?.accessToken) {
        setIsLogged(true)
      } else {
        setIsInvalidUser(true)
      }
    },
    [dispatch]
  )

  useEffect(() => {
    if (isLogged) {
      dispatch(getUser())
      navigate('/users')
    }
  }, [dispatch, isLogged])

  return (
    <div className={styles.card}>
      <img src={logoJungle} alt="Logo Jungle Devs" className={styles.logo} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          id="email"
          name="email"
          ref={register({
            required: true,
          })}
          className={styles.bounds}
        />
        {errors.email && <p className={styles.invalidUserError}>Email is a required field</p>}
        <input
          placeholder="Password"
          id="password"
          name="password"
          ref={register({
            required: 'Senha é obrigatória',
          })}
          type="password"
          className={styles.bounds}
          error={typeof errors.password === 'object'}
          helperText={errors?.password?.message}
        />
        {errors.password && <p className={styles.invalidUserError}>Password is a required field</p>}
        {isInvalidUser && <p className={styles.invalidUserError}>Invalid email or password</p>}
        <button type="submit" loading={loading}>
          Login
        </button>
      </form>
    </div>
  )
}

export default React.memo(App)
