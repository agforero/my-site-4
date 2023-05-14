import PageHeader from '@/components/global/pageHeader'
import Head from 'next/head'

export default function About() {
	return (
		<>
			<Head>
				<title>Agustin Forero: About</title>
				<meta name="description" content="Agustin Forero: About" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<PageHeader>About</PageHeader>
				<p>I am a Release Engineer at <a href="https://www.intersystems.com/">InterSystems, Inc.</a>, at our headquarters in Cambridge, Massachusetts. Our company builds data solutions to unite, analyze and process data across disjointed systems and services.</p>
				<p>I studied my Bachelor of Arts at St. Olaf College, where I earned a double major in Computer Science and History. I then earned my Master of Engineering in Computer Science at Cornell University, at the Tech campus in New York City. I graduated from these programs in 2021 and 2022 respectively.</p>
				<p>I am originally from Naperville, Illinois, a suburb of Chicago. I&apos;ve been interested in computer science since a young age, when I spent plenty of time browsing through <code>System32</code> and destroying my mom&apos;s computer with viruses (not on purpose, I swear). Though my first word was &quot;snow&quot;, my second was &quot;dot com&quot;. I started officially taking introductory coding courses in high school on Python and web design, and I found I had a knack for it.</p>
				<p>Software development has taken me to places I never thought possible as a child. I&apos;ve <a href="https://github.com/agforero/FTFramework" target="_blank" rel="noreferrer">used federal supercomputers to optimize compilers for a language from the 1950s</a>, <a href="https://github.com/Craven-Biostat-Lab/SARS-CoV-2-Analysis/tree/main/code/GraphAnalysis" target='_blank' rel="noreferrer">helped virologists pinpoint important proteins in the COVID-19 infection process</a> and <a href="https://containers.intersystems.com/contents" target='_blank' rel="noreferrer">built a user interface at the forefront of InterSystems' Docker image distribution process</a>. I feel very lucky to work in a field I&apos;ve been passionate about my whole life. Software development demands constant trial and error, usually with no obvious solutions or paths to success, and I thrive on iteratively pursuing these solutions.</p>
				<p>In addition to computer science, I&apos;ve always been very interested in history and political science. I love staring at maps and scouring Wikipedia articles on the gunpowder empires. My favorite games as a kid were <i>Civilization III</i> and <i>IV</i>, and I&apos;ve spent an absurd amount of hours playing <i>Europa Universalis IV</i> in recent years. Understanding the past is imperative to understanding the present, and I find that studying history reveals some very intriguing (and uncomfortable) insights on modern systems and societies.</p>
				<p>In the past few years, I&apos;ve also delved into teaching. I've worked with hundreds of students from eighth graders to senior citizens. At St. Olaf, I was a grader, tutor, <a target="_blank" rel="noreferrer" href="https://wp.stolaf.edu/academic-support/supplemental-instruction-si/">Supplemental Instruction</a> (SI) Leader, and SI Mentor of the Mathematics, Statistics and Computer Science Department. I tutored students one-on-one, provided detailed feedback on homework assignments, taught evening classes and managed fellow Instructors. I later worked for <a target="_blank" rel="noreferrer" href="https://www.inspiritai.com/">Inspirit AI</a>, where I taught several cohorts of high schoolers the fundamentals of Python and machine learning. Finally, for a research project at Cornell, I taught a course on technological literacy at the Roosevelt Island Senior Center, an experience later highlighted during the graduation commencement speech. I love teaching computer science, which serves to introduce people to a curious new field while also contextualizing the increasingly computerized world around us.</p>
			</main>
		</>
	)
}
