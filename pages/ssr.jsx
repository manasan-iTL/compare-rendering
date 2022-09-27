const Ssr = ({data}) => {
    return (
        <div>
            <p>サーバーサイドレンダリング</p>
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

export async function getServerSideProps() {
    const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(API_ENDPOINT)
    const data = await res.json()

    return { 
        props: {
            data
        }
    }
}

export default Ssr