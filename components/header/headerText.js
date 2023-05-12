import Link from 'next/link';
import * as Icons from 'react-bootstrap-icons';

export default function HeaderText({ href="#", name, icon }) {
	const Icon = Icons[icon]
	return (
		<span>
			<Link className="dropdown-item" href={href}>
				<div className='d-flex flex-row'>
					<Icon className="center-text me-2"/>
					{name}
				</div>
			</Link>
		</span>
	)
}