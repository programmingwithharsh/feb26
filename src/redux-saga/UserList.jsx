import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "./store/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((s) => s.users);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <h2>Redux Saga User List</h2>
      {users.map((u) => <p key={u.id}>{u.name}</p>)}
    </div>
  );
};

export default UserList;
