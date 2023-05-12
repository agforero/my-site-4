import PageHeader from '@/components/global/pageHeader'
import Head from 'next/head'
import Image from 'next/image'

export default function Contact() {
	return (
		<>
			<Head>
				<title>Agustin Forero: Contact</title>
				<meta name="description" content="Agustin Forero: Contact" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageHeader>Contact</PageHeader>
			</main>
		</>
	)
}
