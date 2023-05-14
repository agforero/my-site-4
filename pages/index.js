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
				<p>I am a versatile software developer with a broad range of experience in full-stack development, research and education. Throughout my academic and professional pursuits, I have gained proficiency in programming languages such as C, C++ and Python, primarily focusing on back-end development. However, my recent work at InterSystems has allowed me to expand my expertise to encompass front-end design utilizing React, Next.js, and Bootstrap. My versatility in both back- and front-end development enables me to confidently tackle challenges across all levels of the tech stack.</p>
				<p>I graduated in 2021 from St. Olaf College with a double major Bachelor of Arts in Computer Science and History. I then earned my Master of Engineering in Computer Science from Cornell Tech, a school of Cornell University, graduating in 2022.</p>
				<p>Here you will find some information about me: my professional experience, education, projects, resume and even some art.</p>
				<p>I&apos;m always on the lookout for new challenges and opportunities to collaborate. If you&apos;re interested in learning more about how I can help with your next project, feel free to get in touch at <a href="mailto:agf48@cornell.edu">agf48@cornell.edu</a> or connect with me on <a href="https://www.linkedin.com/in/afor/" target="_blank" rel="noreferrer">LinkedIn</a>. Thank you for visiting!</p>
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
				</div>
			</main>
		</>
	)
}
