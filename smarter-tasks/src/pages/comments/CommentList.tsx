import React, { useEffect } from "react";
import { useCommentsDispatch } from "../../context/comment/context";
import { fetchComments } from "../../context/comment/actions";
import CommentListItem from "./CommentListItem";
import { useParams } from "react-router-dom";

function CommentList() {
  const dispatchComments = useCommentsDispatch();
  const { projectID, taskID } = useParams();
  useEffect(() => {
    fetchComments(dispatchComments, Number(projectID), Number(taskID));
  }, []);

  return (
    <div>
      <CommentListItem />
    </div>
  );
}

export default CommentList;
