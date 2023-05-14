import { LinkSharp } from "react-ionicons";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

/* ANOTHER TODO: use css overflow (https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
to have the body disappear once it crosses the header, which is a predetermined height
and allows the body to know when it's supposed to overflow. some calc() stuff, and it
probably requires interacting with the padding to designate exactly when that cut-off
point is inside the parent. */

/* ANOTHER TODO: have the "contact" button disappear in -sm and below (xs, which is just
default. */

export default function ResumeSectionEntry({ entryData, toggleNum, breakpoint }) {
	return (
		<div className={`accordion-item bg-transparent text-white`}>
			<h2 className="accordion-header" id={`panelsStayOpen-heading-${toggleNum}`}>
				<button className="accordion-button collapsed shadow-none bg-transparent text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse-${toggleNum}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse-${toggleNum}`}>
					<div className="d-flex flex-row justify-content-between w-100 pe-3">
						<span>
							<b>{entryData.title}</b>
							{' /' + '/ '}
							{entryData.org}
							{ entryData.link &&
								<a href={entryData.link} target="_blank" rel="noreferrer">
									<LinkSharp className="ms-2 text-warning" color={""}/>
								</a>
							}
						</span>
						<p className="mb-0">{entryData.date}</p>
					</div>
				</button>
			</h2>
			<div id={`panelsStayOpen-collapse-${toggleNum}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading-${toggleNum}`}>
				<div className="accordion-body border-top py-0">
					<ReactMarkdown
						linkTarget="_blank"
						components={{
							p: ({node, ...props}) => <p className="my-3" {...props} />
						}} 
					>
						{entryData.desc}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	)
}