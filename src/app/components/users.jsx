import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
  const countOfUsers = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    console.log("page", pageIndex);
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      {countOfUsers > 0 && (
        <table className="table">
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
            {userCrop.map((user) => (
              <User {...rest} {...user} key={user._id} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={countOfUsers}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

Users.propsType = {
  users: PropTypes.array.isRequired,
};

export default Users;
