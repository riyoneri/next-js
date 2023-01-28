import { useRouter } from 'next/router'

const DetailsPage = () => {
    const router = useRouter()

    console.log(router.query.newsId)
    return <h1>This is Details Page</h1>
}

export default DetailsPage