// import * as Icons from 'react-bootstrap-icons'
import * as Icons from 'react-ionicons'

export default function GetIconFromName({ name="LogoSlack", className="", color=""}) {
	const Icon = Icons[name]
	var iconColor = color || "#ffffff"
	return <Icon
		height="1em" 
		width="1em" 
		color={iconColor} 
		cssClasses={className + " mt-1"}
	/>
}