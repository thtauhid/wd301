export interface Comment {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  task_id: number;
  owner: number;
  User: {
    name: string;
    email: string;
    id: number;
  };
}

export type CommentPayload = Omit<
  Comment,
  "id" | "createdAt" | "updatedAt" | "task_id" | "User"
>;

export interface CommentsState {
  comments: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type CommentsActions =
  | { type: "FETCH_COMMENTS_REQUEST" }
  | { type: "FETCH_COMMENTS_SUCCESS"; payload: any }
  | { type: "FETCH_COMMENTS_FAILURE"; payload: string }
  | { type: "ADD_COMMENT"; payload: Comment };

export type CommentsDispatch = React.Dispatch<CommentsActions>;
