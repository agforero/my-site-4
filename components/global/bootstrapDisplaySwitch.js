import { cloneElement } from "react"

// this component expects TWO children. the first displays when the trigger is true,
// and the second displays when the trigger is false, using Bootstrap. THIS ONLY
// WORKS ON BASIC ELEMENTS like <p> or <div> for now.
export default function BootstrapDisplaySwitch({ children, trigger }) {
	var classNameA = children[0].props.className ? children[0].props.className : ""
	var classNameB = children[1].props.className ? children[1].props.className : ""
	var CloneA = cloneElement(children[0], {className: classNameA + ` d-${trigger}-flex d-none`, key: 0})
	var CloneB = cloneElement(children[1], {className: classNameB + ` d-${trigger}-none d-flex`, key: 1})
	return [
		CloneA,
		CloneB
	]
}