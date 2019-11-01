import React from "react"
import { Helmet } from 'react-helmet'
import '../scss/styles.scss'

export default () => (
  <>
    <Helmet defer={false}>
      <meta charSet="utf-8" />
      <title>EDBoilerplate</title>
    </Helmet>
    <header className="s-bg-grey s-center s-pxy-4">
      <h1>EDgrid 3.0 is coming</h1>
      <p className="s-mb-0 s-opacity-7">Creado con 💓 y 🦄 por <b>EDteam</b></p>
    </header>
  </>
)
