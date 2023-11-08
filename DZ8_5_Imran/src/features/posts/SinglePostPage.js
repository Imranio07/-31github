import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
            <p>{post.body}</p>
            <p className="postCredit">
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>/
            </p>
        </article>
    )
}

export default SinglePostPage