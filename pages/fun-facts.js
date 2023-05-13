import PageHeader from '@/components/global/pageHeader'
import Head from 'next/head'

export default function FunFacts() {
	return (
		<>
			<Head>
				<title>Agustin Forero: Fun Facts</title>
				<meta name="description" content="Agustin Forero: Fun Facts" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageHeader>Fun Facts</PageHeader>
			</main>
		</>
	)
}
