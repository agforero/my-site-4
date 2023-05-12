import PageHeader from '@/components/global/pageHeader'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Agustin Forero</title>
				<meta name="description" content="Agustin Forero: Home" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageHeader>Home</PageHeader>
				<p>Hello, and welcome to my page. My name is Agustin and I'm a Release Engineer at InterSystems, Inc.</p>
				<p>I have a rich background working in software design, research and teaching. My recent work has mostly centered around front-end design using React, Next.js and Bootstrap.</p>
				<p>I graduated in 2021 from St. Olaf College with a double major Bachelor of Arts in Computer Science and History. I then graduated in 2022 from Cornell Tech, a school of Cornell University, with a Master of Engineering in Computer Science.</p>
				<p>Here you will find some information about me: my professional experience, education, projects, resume, and even some art.</p>
				<p>Inquiries can be directed to <a href="mailto:agf48@cornell.edu">agf48@cornell.edu</a>, or you can reach out to me at my <a href="https://www.linkedin.com/in/afor/" target="_blank" rel="noreferrer">LinkedIn profile</a>. Thank you for visiting.</p>
				<div className='mt-2'>
					<Link href="/resume">
						<div className='btn btn-light me-2 mb-2'>
							Interactive Resume
						</div>
					</Link>
					<Link href="/projects">
						<div className='btn btn-outline-light me-2 mb-2'>
							Projects
						</div>
					</Link>
					<Link href="/contact">
						<div className='btn btn-outline-light mb-2'>
							Contact
						</div>
					</Link>
				</div>
			</main>
		</>
	)
}