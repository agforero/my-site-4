import getPagesMap from '@/functions/getPagesMap'
import { useRouter } from 'next/router'
import GetIconFromName from './getIconFromName'

export default function PageHeader({ children }) {
    const router = useRouter()
    const pagesMap = getPagesMap()
    return <h1 className="display-1 d-flex ff-space-mono">
        {children} <GetIconFromName name={pagesMap[router.asPath]["icon"]} className="display-1 center-text ms-4"/>
    </h1>
}   