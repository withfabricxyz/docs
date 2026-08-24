import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

import styles from '../theme.module.css'
import '../style/video.css'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Fabric Docs',
    template: '%s - Fabric Docs'
  },
  description: 'Documentation for the Fabric Protocol, Clients, and APIs',
  icons: {
    icon: '/spark.svg',
    apple: '/spark.svg'
  }
}

const navbar = (
  <Navbar
    logo={
      <div className={styles.logo}>
        <img width="32" height="32" src="/spark.svg" alt="Spark!" />
        <strong>Fabric Docs</strong>
      </div>
    }
    projectLink="https://github.com/withfabricxyz"
  />
)

const footer = <Footer>©️ 2023 Fabric Inc.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta property="og:title" content="Fabric Docs" />
        <meta property="og:description" content="Documentation for the Fabric Protocol, Clients, and APIs" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/withfabricxyz/docs/tree/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
