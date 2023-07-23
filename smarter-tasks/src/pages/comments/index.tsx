import React from "react";
import NewComment from "./NewComment";
import CommentList from "./CommentList";
import { CommentsProvider } from "../../context/comment/context";

function Comments() {
  return (
    <CommentsProvider>
      <div className='mt-4'>
        <b>Comments</b>
        <div>
          <CommentList />
        </div>

        <NewComment />
      </div>
    </CommentsProvider>
  );
}

export default Comments;
