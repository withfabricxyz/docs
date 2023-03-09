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
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/withfabricxyz/docs',
  footer: {
    text: 'Thanks for all the fish!',
  },
}

export default config
