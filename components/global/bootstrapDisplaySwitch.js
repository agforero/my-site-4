import { cloneElement } from "react"

// this component expects TWO children. the first displays when the trigger is true,
// and the second displays when the trigger is false, using Bootstrap.
export default function BootstrapDisplaySwitch({ children, trigger }) {
    var CloneA = cloneElement(children[0], {className: children[0].props.className + ` d-${trigger}-flex d-none`, key: 0})
    var CloneB = cloneElement(children[1], {className: children[1].props.className + ` d-${trigger}-none d-flex`, key: 1})
    return [
        CloneA,
        CloneB
    ]
}