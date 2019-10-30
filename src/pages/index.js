import React from "react"
import { Helmet } from 'react-helmet'
import '../scss/styles.scss'

export default () => (
  <>
    <Helmet defer={false}>
      <meta charSet="utf-8" />
      <title>EDBoilerplate</title>
    </Helmet>
    <h1>EDBoilerplate</h1>
  </>
)
