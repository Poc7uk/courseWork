import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  return (
    <>
      {users.length > 0 && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Ім'я</th>
              <th scope="col">Якості</th>
              <th scope="col">Професія</th>
              <th scope="col">Кількість зустрічей</th>
              <th scope="col">Оцінка</th>
              <th scope="col">Обране</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
