import Header from "../header/header";

export default function Layout({ children }) {
	return (
		<>
			<div className="sticky-top">
				<div className="position-relative">
					<div className="position-absolute top-0 start-0 w-100">
						<Header/>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column justify-content-center" style={{minHeight: "100vh"}}>
				<div className="container">
					{children}
				</div>
			</div>
		</>
	)
}