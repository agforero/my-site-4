import GetIconFromName from "../global/getIconFromName";
import Link from "next/link";

export default function ContactButton({ buttonData }) {
	return <Link className="text-decoration-none me-3" href={buttonData.href} target={(!buttonData.noBlank) ? "_blank" : ""}>
		<div className="btn btn-warning d-flex flex-row">
			<GetIconFromName className="me-2" name={buttonData.icon} color="#000" marginY="mb-1"/>
			<p className="mb-0">{buttonData.name}</p>
		</div>
	</Link>
}