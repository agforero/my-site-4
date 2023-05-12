// this is the single source of truth for all pages accessible to the user.
export default function getPagesMap() {
    return {
        "/": {
            "name": "Home", 
            "icon": "HouseHeartFill"
        },
        "/about": {
            "name": "About", 
            "icon": "InfoSquareFill"
        },
        "/contact": {
            "name": "Contact", 
            "icon": "ChatFill"
        },
        "/resume": {
            "name": "Resume", 
            "icon": "JournalText"
        },
        "/projects": {
            "name": "Projects", 
            "icon": "ConeStriped"
        },
        "/teaching": {
            "name": "Teaching", 
            "icon": "EaselFill"
        },
        "/art": {
            "name": "Art", 
            "icon": "PaletteFill"
        },
        "/fun-facts": {
            "name": "Fun Facts", 
            "icon": "EmojiSunglassesFill"
        },
    }
}