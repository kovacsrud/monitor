

function DummyPost({ post }) {
    return (
        <div className="card bg-sky-300 w-96  shadow-sm m-2">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {post.title}


                </h2>

                <p className="flex-grow">{post.body}</p>

                <div className="card-actions justify-end">
                    {
                        post.tags.map((tag, i) => (<div key={i} className="badge badge-secondary m-1">{tag}</div>))
                    }

                </div>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Like:{post.reactions.likes}</div>
                    <div className="badge badge-outline">Dislike:{post.reactions.dislikes}</div>
                    <div className="badge badge-outline">Views:{post.views}</div>
                </div>
            </div>
        </div>
    )
}

export default DummyPost