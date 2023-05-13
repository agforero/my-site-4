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
				<p>Hello, and welcome to my page. My name is Agustin and I&apos;m a Release Engineer at InterSystems, Inc.</p>
				<p>I have a rich background working in software design, research and teaching. My recent work has mostly centered around front-end design using React, Next.js and Bootstrap.</p>
				<p>I graduated in 2021 from St. Olaf College with a double major Bachelor of Arts in Computer Science and History. I then earned my Master of Engineering in Computer Science from Cornell Tech, a school of Cornell University, graduating in 2022.</p>
				<p>Here you will find some information about me: my professional experience, education, projects, resume, and even some art.</p>
				<p>Inquiries can be directed to <a href="mailto:agf48@cornell.edu">agf48@cornell.edu</a>, or you can reach out to me at my <a href="https://www.linkedin.com/in/afor/" target="_blank" rel="noreferrer">LinkedIn profile</a>. Thank you for visiting.</p>
				<div className='mt-4'>
					<Link href="/resume">
						<div className='btn btn-warning me-3'>
							Interactive Resume
						</div>
					</Link>
					<Link href="/projects">
						<div className='btn btn-outline-light me-3'>
							Projects
						</div>
					</Link>
					<Link href="/contact">
						<div className='btn btn-outline-light'>
							Contact
						</div>
					</Link>
				</div>
			</main>
		</>
	)
}
