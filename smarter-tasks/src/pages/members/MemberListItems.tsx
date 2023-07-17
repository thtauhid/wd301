import { TrashIcon } from "@heroicons/react/24/outline";
import { useUsersDispatch, useUsersState } from "../../context/members/context";
import { deleteUser } from "../../context/members/actions";

export default function MemberListItems() {
  let state: any = useUsersState();

  const dispatchUsers = useUsersDispatch();

  const { users, isLoading, isError, errorMessage } = state;
  console.log(users);

  if (users.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {users.map((user: any) => (
        <div
          key={user.id}
          className='block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
        >
          <div className='flex justify-between'>
            <h5 className='mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white'>
              {user.name}
            </h5>
            <button
              onClick={() => {
                console.log("delete ", user.id);
                deleteUser(dispatchUsers, user.id);
              }}
            >
              <TrashIcon className='w-5 h-5 text-red-500' />
            </button>
          </div>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}
