import ContactButton from '@/components/contact/contactButton'
import PageHeader from '@/components/global/pageHeader'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Contact() {
	const contactButtonData = [
		{
			"name": "Email",
			"icon": "MailSharp",
			"href": "mailto:agf48@cornell.edu",
			"noBlank": true
		},
		{
			"name": "LinkedIn",
			"icon": "LogoLinkedin",
			"href": "https://www.linkedin.com/in/afor/"
		},
		{
			"name": "GitHub",
			"icon": "LogoGithub",
			"href": "https://github.com/agforero"
		}
	]

	const [contactButtons, setContactButtons] = useState([])
	useEffect(() => {
		const contactButtonsBuilder = contactButtonData.map((entry, i) => 
			<ContactButton key={i} buttonData={entry}/>
		)
		setContactButtons(contactButtonsBuilder)
	}, [])

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
				<p>Feel free to reach out to me at any of the following mediums. I&apos;ll try to answer as soon as I can.</p>
				<div className='d-flex flex-row'>
					{ contactButtons }
				</div>
			</main>
		</>
	)
}
