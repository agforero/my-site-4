import { LinkSharp } from "react-ionicons"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function ProjectEntry({ projectData }) {
	console.log(projectData)
	return (
		<div className={`d-flex flex-row$ w-100 my-5`}>
			<div className="border border-1 border-sharp flex-grow-1">
				<div className="p-3 d-flex flex-row justify-content-between border-bottom">
					<div>
						<h1 className="fw-bold ff-space-mono">{projectData.title}</h1>
						<h3>
							{projectData.org}
							{' /' + '/ '}
							{projectData.date}
							{projectData.link &&
								<a className="align-top ms-2" href={projectData.link} target="_blank" rel="noreferrer">
									<LinkSharp cssClasses="mb-1 text-warning" color={""} />
								</a>
							}
						</h3>
					</div>
				</div>
				<div className="px-3">
					{projectData.video &&
						<iframe 
							className="mt-3"
							width="560" 
							height="315" 
							src={`https://www.youtube.com/embed/${projectData.video}`}
							title="YouTube video player" 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							allowfullscreen
						/>
					}
					<ReactMarkdown
						linkTarget="_blank"
						components={{
							p: ({ node, ...props }) => <p className="my-3" {...props} />
						}}
					>
						{projectData.desc}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	)
}