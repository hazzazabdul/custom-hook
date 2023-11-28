/* eslint-disable react/prop-types */
import "./Comment.css"

const Comment = ({comment}) => {

    const {name, body} = comment
    return (
        <div className="comment">
            <h3 className="comment__heading"><b>Name:</b>{name}</h3>
            <p><b>Comment:</b> {body}</p>
        </div>
    );
};

export default Comment;