import getPagesMap from '@/functions/getPagesMap'
import { useRouter } from 'next/router'
import * as Icons from 'react-bootstrap-icons'

export default function PageHeader({ children }) {
    const router = useRouter()
    const pagesMap = getPagesMap()
    const Icon = Icons[pagesMap[router.asPath]["icon"]]
    return <h1 className="display-1 d-flex">{children} <Icon className="center-text ms-4"/></h1>
}