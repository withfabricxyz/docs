import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

import styles from './theme.module.css'

const config: DocsThemeConfig = {
  logo: (
    <div className={styles.logo}>
      <img width="32" height="32" src="/spark.svg" alt="Spark!" />
      <strong>Fabric Docs</strong>
    </div>
  ),
  project: {
    link: 'https://github.com/withfabricxyz',
  },
  docsRepositoryBase: 'https://github.com/withfabricxyz/docs/tree/main',
  footer: {
    text: '©️ 2023 Fabric Inc.',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Fabric Docs'
    }
  },
  head: (
    <>
      <link rel="apple-touch-icon" href="/spark.svg" />
      <link rel="icon" type="image/svg" href="/spark.svg"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Fabric Docs" />
      <meta property="og:description" content="Documentation for the Fabric Protocol, Clients, and APIs" />
    </>
  ),
}

export default config
