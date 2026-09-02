import Head from 'next/head'
import PortfolioDashboard from '../components/PortfolioDashboard'

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Todals Portfolio</title>
        <meta
          name="description"
          content="A private portfolio workspace for tasks, photos, and content ideas."
        />
      </Head>
      <PortfolioDashboard />
    </>
  )
}
