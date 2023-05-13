import PageHeader from '@/components/global/pageHeader'
import Head from 'next/head'

export default function Art() {
	return (
		<>
			<Head>
				<title>Agustin Forero: Art</title>
				<meta name="description" content="Agustin Forero: Art" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageHeader>Art</PageHeader>
			</main>
		</>
	)
}
