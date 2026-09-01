import { UserInfo } from "./UserInfo";
export const UserCard = ({ id, ...rest }) => {
  return (
    <>
      <h3>User {id} Details</h3>
      <UserInfo {...rest} />
    </>
  );
};
