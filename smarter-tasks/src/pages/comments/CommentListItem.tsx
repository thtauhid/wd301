import React from "react";
import { useCommentsState } from "../../context/comment/context";
import { Comment, CommentsState } from "../../context/comment/types";

function CommentListItem() {
  let state: CommentsState = useCommentsState();
  console.log(state);

  const { comments, isLoading, isError, errorMessage } = state;

  comments.sort((a: Comment, b: Comment) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (comments.length === 0 && !isLoading) {
    return <span>No comments yet.</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <div>
      {comments.map((comment: Comment) => {
        return (
          <div
            key={comment.id}
            className='comment m-2 bg-slate-300 p-2 rounded'
          >
            <span>{new Date(comment.createdAt).toLocaleString()}</span>
            <p>
              {comment.User.name}: <b>{comment.description}</b>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CommentListItem;
