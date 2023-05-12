// add bootstrap css 
import Head from 'next/head'
import Layout from '@/components/global/layout'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/css/bootstrap.min.css")
		require("bootstrap/dist/js/bootstrap.bundle.min.js")
	}, [])
	return (
		<div className='cool-background text-white' style={{ minHeight: "100vh", maxWidth: "100vw" }}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>

		</div>
	)
}
