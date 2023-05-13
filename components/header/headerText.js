import Link from 'next/link';
import getIconFromName from '../global/getIconFromName';
import GetIconFromName from '../global/getIconFromName';

export default function HeaderText({ href="#", name, icon }) {
	return (
		<span>
			<Link className="dropdown-item" href={href}>
				<div className='d-flex flex-row'>
					<GetIconFromName name={icon} className='center-text me-2 text-white'/>
					{name}
				</div>
			</Link>
		</span>
	)
}