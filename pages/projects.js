import PageHeader from '@/components/global/pageHeader'
import Head from 'next/head'

export default function Projects() {
	return (
		<>
			<Head>
				<title>Agustin Forero: Projects</title>
				<meta name="description" content="Agustin Forero: Projects" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageHeader>Projects</PageHeader>
			</main>
		</>
	)
}
