import getPagesMap from '@/functions/getPagesMap'
import { useRouter } from 'next/router'
import getIconFromName from './getIconFromName'

export default function PageHeader({ children }) {
    const router = useRouter()
    const pagesMap = getPagesMap()
    const Icon = getIconFromName(pagesMap[router.asPath]["icon"])
    return <h1 className="display-1 d-flex ff-space-mono">{children} <Icon className="center-text ms-4"/></h1>
}   