import { API_ENDPOINT } from "../../config/constants";
import { Comment, CommentPayload, CommentsDispatch } from "./types";

export const fetchComments = async (
  dispatch: CommentsDispatch,
  project_id: number,
  task_id: number
) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    console.log("starting fetch comments request...");
    dispatch({ type: "FETCH_COMMENTS_REQUEST" });

    const response = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching users:", error);
    dispatch({
      type: "FETCH_COMMENTS_FAILURE",
      payload: "Unable to load users",
    });
  }
};

export const addComment = async (
  dispatch: CommentsDispatch,
  project_id: number,
  task_id: number,
  payload: CommentPayload
) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    console.log("starting add comment request...");

    const response = await fetch(
      `${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    // get local user
    const user = JSON.parse(localStorage.getItem("userData") ?? "");
    data.User = user;

    dispatch({ type: "ADD_COMMENT", payload: data });

    return { ok: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { ok: false, error };
  }
};
