import ResumeSectionEntry from "./resumeSectionEntry"
import ResumeSectionEntrySmall from "./resumeSectionEntrySmall"

// this chooses between the normal or mobile version for the resume section entries.
export default function ResumeSectionEntryDistro({ entryData, toggleNum }) {
	const breakpoint = "lg"
	return (
		<>
			<ResumeSectionEntry entryData={entryData} toggleNum={toggleNum} breakpoint={breakpoint}  />
			{/* <ResumeSectionEntrySmall entryData={entryData} toggleNum={toggleNum} breakpoint={breakpoint}  /> */}
		</>
	)
}