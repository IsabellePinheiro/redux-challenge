import React from 'react'
import { Router as ReachRouter } from '@reach/router'

import App from '_views/app'
import Main from '_views/main'
import NotFoundPage from '_views/not-found'

const Router = () => (
  <ReachRouter>
    <App path="/" />
    <Main path="/user" />
    <NotFoundPage default />
  </ReachRouter>
)

export default Router
