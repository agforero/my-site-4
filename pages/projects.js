import PageHeader from '@/components/global/pageHeader'
import ProjectEntry from '@/components/projects/index/projectEntry'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects() {
	const [projectsData, setProjectsData] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			await axios.get("/data/resumeEntries.json")
				.then(result => setProjectsData(result.data["Projects"]))
				.catch(error => console.log(error))
		}
		fetchData()
	}, [])

	const [projects, setProjects] = useState([])
	useEffect(() => {
		const projectsBuilder = projectsData.map((projectData, i) => 
			<ProjectEntry key={i} id={projectData.title} projectData={projectData}/>
		)
		setProjects(projectsBuilder)
	}, [projectsData])

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
				<p>A list of projects in software development I&apos;ve worked on.</p>
				{ projects }
			</main>
		</>
	)
}
