import PageHeader from '@/components/global/pageHeader'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ResumeSection from '@/components/resume/index/resumeSection'
import Link from 'next/link'
import BootstrapDisplaySwitch from '@/components/global/bootstrapDisplaySwitch'

export default function Resume() {
	const [resumeData, setResumeData] = useState({})
	useEffect(() => {
		const fetchData = async () => {
			await axios.get("/data/resumeEntries.json")
				.then(result => setResumeData(result.data))
				.catch(error => console.log(error))
		};
		fetchData();
	}, [])

	const [sections, setSections] = useState([])
	useEffect(() => {
		const sectionsBuilder = Object.keys(resumeData).map((section, i) => 
			<ResumeSection 
				key={i} 
				section={section} 
				sectionData={resumeData[section]} 
				toggleNum={i}
			/>
		)
		setSections(sectionsBuilder)
	}, [resumeData])

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
				<div className='d-flex flex-row justify-content-between'>
					<p className='my-auto'>Click the entries below to view more information.</p>
					<Link
						href="https://docs.google.com/document/d/1nyW-eC_wzjLBGYVyJPTtvo1EU5e4sOp4sUTdfCymbyE/export?format=pdf"
						className='btn btn-warning text-dark text-decoration-none'
						target="_blank"
					>
						View Resume As PDF
					</Link>
				</div>
				{ sections }
			</main>
		</>
	)
}
