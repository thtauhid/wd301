import React, { useEffect } from "react";

import MemberListItems from "./MemberListItems";
import { useUsersDispatch } from "../../context/members/context";
import { fetchUsers } from "../../context/members/actions";

const MemberList: React.FC = () => {
  const dispatchUsers = useUsersDispatch();

  useEffect(() => {
    fetchUsers(dispatchUsers);
  }, []);
  return (
    <div className='grid gap-4 grid-cols-4 mt-5'>
      <MemberListItems />
    </div>
  );
};
export default MemberList;
