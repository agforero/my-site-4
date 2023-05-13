import { useEffect, useState } from "react"
import ResumeSectionEntry from "./resumeSectionEntry"
import ResumeSectionEntryLanguage from "./resumeSectionEntryLanguage"

function uniqueNum(a, b) {
	return 2**a * 3**b
}

export default function ResumeSection({ section, sectionData, toggleNum }) {
	const [entries, setEntries] = useState([])
	const normalDisp = (section !== "Languages and Technologies")
	useEffect(() => {
		const entriesBuilder = []
		sectionData.map((entry, j) => {
			entriesBuilder.push(
				(normalDisp) ?
					<ResumeSectionEntry key={j} entryData={entry} toggleNum={uniqueNum(toggleNum, j)} /> :
					<ResumeSectionEntryLanguage key={j} skill={entry} toggleNum={uniqueNum(toggleNum, j)} />
			)
		})
		setEntries(entriesBuilder)
	}, [])

	return (
		<div className="my-5">
			<h1>{section}</h1>
			{ (normalDisp) ?
				<div className="accordion accordion-flush" id={`resume-accordion-${toggleNum}`}>
					{entries}
				</div> :
				<ul className="list-group list-group-flush bg-transparent text-white">
					{entries}
				</ul>
			}
		</div>
	)
}