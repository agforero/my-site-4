import Header from "../header/header";

export default function Layout({ children }) {
	const internalPadding = "150px"
	return (
		<>
			<div className="sticky-top">
				<div className="position-relative">
					<div className="position-absolute top-0 start-0 w-100">
						<Header/>
					</div>
				</div>
			</div>
			<div className="d-flex" style={{minHeight: "100vh"}}>
				<div className="container my-auto" style={{paddingTop: internalPadding, paddingBottom: internalPadding}}>
					<div className="my-auto" style={{}}>
						{children}
					</div>
				</div>
			</div>
		</>
	)
}