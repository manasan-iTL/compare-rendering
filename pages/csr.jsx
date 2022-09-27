import useSWR from "swr"

const Csr = () => {
    const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"
    const fetcher = (url) => fetch(url).then(res => res.json()).catch(err => err)
    const {data, error} = useSWR(API_ENDPOINT, fetcher)
    return (
        <div>
            <p>クライアントサイドレンダリング</p>
            {
                data && data.map(post => (
                    <div key={post.id}>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Csr