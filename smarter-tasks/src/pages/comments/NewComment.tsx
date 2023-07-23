import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addComment } from "../../context/comment/actions";
import { useCommentsDispatch } from "../../context/comment/context";
import { useParams } from "react-router-dom";

type Inputs = {
  comment: string;
};

function NewComment() {
  const dispatchComments = useCommentsDispatch();
  const [error, setError] = useState(null);

  // get local user
  const user = JSON.parse(localStorage.getItem("userData") ?? "");

  // get project id & task id
  const { projectID, taskID } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { comment } = data;

    console.log(comment);

    const response = await addComment(
      dispatchComments,
      Number(projectID),
      Number(taskID),
      {
        description: comment,
        owner: user.id,
      }
    );

    console.log(response);

    if (response.ok) {
      console.log(response);
      reset();
    } else {
      // Or I'll set the error.
      setError(response.error as React.SetStateAction<null>);
    }
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          placeholder='Add a comment...'
          rows={4}
          cols={50}
          id='commentBox'
          {...register("comment", { required: true })}
          className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.comment ? "border-red-500" : ""
          }`}
        />
        <button
          className='inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          type='submit'
          id='addCommentBtn'
        >
          Comment
        </button>
      </form>
    </div>
  );
}

export default NewComment;
