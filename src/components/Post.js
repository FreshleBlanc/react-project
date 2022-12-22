import { Link } from 'react-router-dom'

export default function Post(props) {

    function buildTitle() {
        if (props.showLink) {
            return (
                <h2><Link to={ `/blog/${props.post.uid}/${props.post.id}` }>{ props.post.title }</Link></h2>
            )
        } else {
            return (
                <h2>{ props.post.title }</h2>
            )
        }
    }

    return (
        <div className="post">
            { buildTitle() }
            
            <p>{ props.post.body }</p>
            <p className="author">Posted By: { props.post.username }</p>
        </div>
    )
}