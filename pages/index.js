import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kawal Haji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bismillah Kom..." />
        <p className="description">
          Bismillah Kom... puter sedang bekerja membangun aplikasi pelaporan masalah dan update situasi Jamaah Haji Indonesia 2024
        </p>
      </main>

      <Footer />
    </div>
  )
}
