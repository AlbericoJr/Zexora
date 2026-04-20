import React from 'react'
import CopyrightCss from './Copyright.module.css'

export default function Copyright() {
  return (
    <section className={CopyrightCss.copyright}>
      <p>
        Copyright © 2026. Todos os direitos reservados por <a href="#">K2infocom</a>.
      </p>
    </section>
  )
}
