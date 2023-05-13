// import * as Icons from 'react-bootstrap-icons'
import * as Icons from 'react-ionicons'

export default function GetIconFromName({ name="LogoSlack", className="", color="#ffffff", marginY="mt-1"}) {
	const Icon = Icons[name]
	return <Icon
		height="1em" 
		width="1em" 
		color={color} 
		cssClasses={className + " " + marginY}
	/>
}