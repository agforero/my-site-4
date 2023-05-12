import PageHeader from '@/components/global/pageHeader'
import Head from 'next/head'
import Image from 'next/image'

export default function Resume() {
	return (
		<>
			<Head>
				<title>Agustin Forero: Resume</title>
				<meta name="description" content="Agustin Forero: Resume" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageHeader>Resume</PageHeader>
			</main>
		</>
	)
}
