// this is the single source of truth for all pages accessible to the user.
export default function getPagesMap() {
    return {
        "/": {
            "name": "Home", 
            "icon": "HomeSharp"
        },
        "/about": {
            "name": "About", 
            "icon": "InformationCircleOutline"
        },
        "/contact": {
            "name": "Contact", 
            "icon": "ChatboxEllipsesSharp"
        },
        "/resume": {
            "name": "Resume", 
            "icon": "ReaderSharp"
        },
        "/projects": {
            "name": "Projects", 
            "icon": "HammerSharp"
        },
        "/teaching": {
            "name": "Teaching", 
            "icon": "EaselSharp"
        },
        "/art": {
            "name": "Art", 
            "icon": "ColorPaletteSharp"
        },
        "/fun-facts": {
            "name": "Fun Facts", 
            "icon": "PlanetSharp"
        },
    }
}