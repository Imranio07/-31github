import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { Link } from 'react-router-dom';

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
            </p>
        </article>
    )
}
export default PostsExcerpt