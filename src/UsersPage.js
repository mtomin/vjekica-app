import { React, useEffect, useState } from "react";
import * as apiService from "./services/apiService";
import UserItem from "./UserItem";
import { Table } from "react-bootstrap";
import PaginationFooter from "./PaginationFooter";

function UsersPage() {
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    apiService.getUsers(page).then((u) => setUsers(u));
  }, []);

  function reloadUsers(newPage) {
    apiService.getUsers(newPage).then((u) => {
      setUsers(u);
      setPage(newPage);
    });
  }

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Profile picture</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => (
            <UserItem user={u} key={u.id} />
          ))}
        </tbody>
      </Table>

      <PaginationFooter page={page} onPageChange={reloadUsers} />
    </>
  );
}

export default UsersPage;
