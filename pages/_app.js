// add bootstrap css 
import Head from 'next/head'
import Layout from '@/components/global/layout'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
	useEffect(() => {
		require("bootstrap/dist/css/bootstrap.min.css")
		require("bootstrap/dist/js/bootstrap.bundle.min.js")
	}, [])

	// fix annoying fbclid thing that prevents opening from IG
	const router = useRouter()
	useEffect(() => {
		if (!router.isReady) { return } else {
			if (router.query && router.query["fbclid"]) {
				window.location = "https://www.agforero.com/"
			}
		}
	}, [router])
	
	return (
		<div className='bg-cool text-white' style={{ minHeight: "100vh", maxWidth: "100vw" }}>
			<link rel="icon" href="http://www.agforero.com/favicon.ico" />
			<Analytics/>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	)
}
