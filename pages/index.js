import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyProject - Next.js App</title>
        <meta name="description" content="Next.js application deployed on Heroku" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>MyProject</span>
        </h1>

        <p className={styles.description}>
          A simple Next.js application deployed on Heroku
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Next.js &rarr;</h2>
            <p>React framework for production</p>
          </div>

          <div className={styles.card}>
            <h2>Heroku &rarr;</h2>
            <p>Cloud platform for deployment</p>
          </div>

          <div className={styles.card}>
            <h2>CI/CD &rarr;</h2>
            <p>Automated testing and deployment</p>
          </div>

          <div className={styles.card}>
            <h2>GitHub Actions &rarr;</h2>
            <p>Workflow automation</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Next.js and Heroku</p>
      </footer>
    </div>
  )
}

