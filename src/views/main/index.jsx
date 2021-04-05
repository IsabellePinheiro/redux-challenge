import React, { useCallback, useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { useSelector, useDispatch } from 'react-redux'

import Header from '_components/Header'
import { getUser, updateUser } from '_modules/user/actions'
import { getUserSelector, loadingUpdateUser, loadingUser } from '_modules/user/selectors'

import styles from './styles.css'

const ALLOW_IMAGES_EXTENSIONS = ['.jpeg', '.jpg', '.png']
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

const Main = () => {
  const user = useSelector(getUserSelector)
  const dispatch = useDispatch()
  const loading = useSelector(loadingUser)
  const loadingUpdateName = useSelector(loadingUpdateUser)

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault()
      const newName = evt.target.elements.name.value
      if (newName) {
        dispatch(updateUser({ name: newName }, user.get('id')))
        document.getElementById('name').value = ''
      }
    },
    [dispatch, user]
  )
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const onChange = useCallback(
    event => {
      const file = event.target.files[0]
      getBase64(file).then(data => {
        dispatch(updateUser({ avatar: data }, user.get('id')))
      })
    },
    [dispatch, user]
  )

  const handleChangeAvatar = useCallback(() => {
    const inputFile = document.createElement('input')
    inputFile.value = ''
    inputFile.type = 'file'
    inputFile.accept = ALLOW_IMAGES_EXTENSIONS
    inputFile.onchange = onChange
    inputFile.click()
  }, [onChange])
  return (
    <>
      <Header />
      {loading ? (
        <ClipLoader color="grey" loading={loading} size={50} />
      ) : (
        <div className={styles.container}>
          <div className={styles.title}>
            <h1> You&apos;re logged in as:</h1>
          </div>
          <div className={styles.maskLogo}>
            <button type="button" onClick={handleChangeAvatar}>
              <img src={user.get('avatar')} alt="User" className={styles.logo} />
            </button>
          </div>
          <div className={styles.name}>
            <h3>{user.get('name')}</h3>
          </div>
          <div className={styles.email}>
            <p>{user.get('email')}</p>
          </div>
          <p>USER ID: {user.get('id')}</p>
          <div className={styles.formChangeName}>
            <b>Change your name here:</b>
            <form onSubmit={handleSubmit}>
              <input placeholder="Type your new name here..." name="name" id="name" type="text" />

              <button type="submit" className={styles.submitButton} disabled={loadingUpdateName}>
                {loadingUpdateName ? (
                  <ClipLoader color="white" loading={loadingUpdateName} size={20} />
                ) : (
                  'Change Name'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default React.memo(Main)
