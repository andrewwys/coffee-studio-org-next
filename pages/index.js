import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main>
        <h1>Buy coffee here!</h1>
      </main>

      <footer>
        {'this is a footer'}
      </footer>
    </div>
  )
}
