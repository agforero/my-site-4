import getPagesMap from "@/functions/getPagesMap"
import HeaderText from "./headerText"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Header() {
	const router = useRouter()
	const pagesMap = getPagesMap()
	const [thisPage, setThisPage] = useState({})
	useEffect(() => {
		if (!router.isReady) { return } else {
			setThisPage(pagesMap[router.asPath])
		}
	}, [router])

	const pagesButtons = Object.keys(pagesMap).map((page, i) => {
		const pageObj = pagesMap[page]
		return (
			<li key={i}>
				<HeaderText href={page} name={pageObj["name"]} icon={pageObj["icon"]} />
			</li>
		)
	})

	return (
		<header className="p-3 pb-0 bg-transparent text-white z-index-master header-blur" style={{height: "85px"}}>
			<div className="container pb-3 border-bottom">
				<div className="d-flex flex-wrap align-items-center justify-content-between">
					<Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
						<img className="me-3" src="/logo_white.svg" height="50px" width="50px" alt="AGForero Logo" />
						<h3 className="mb-0 ff-space-mono">Agustin G. Forero</h3>
					</Link>
					<div className="d-flex flex-row ff-space-mono">
						<Link href="/contact" className={(router.asPath === "/contact") ? "d-none" : "d-flex" + " text-decoration-none"}>
							<div className="btn btn-outline-warning me-3">
								Contact
							</div>
						</Link>
						<div>
							<button type="button" className="btn btn-warning dropdown-toggle d-flex flex-row" data-bs-toggle="dropdown" aria-expanded="false">
								<p className="mb-0 me-1">{thisPage["name"]}</p>
							</button>
							<ul className="dropdown-menu dropdown-menu-dark">
								{pagesButtons}
								{/* <li><hr className="dropdown-divider"/></li>
								<li><a className="dropdown-item" href="#">Separated link</a></li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}