import React from "react";
import * as style from "./RenderList.module.scss";
import shortid from "shortid";

function RenderList({ list }) {
  return (
    <table>
      <theadd>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </theadd>
      <tbody>
        {list.length > 0 &&
          list.map((el) => (
            <tr key={shortid.generate()}>
              <td>{el.fullName}</td>
              <td>{el.gender}</td>
              <td>{el.contact}</td>
              <td>{el.dob}</td>
              <td>{el.salary}</td>
              <td>{el.status}</td>
              <td>{el.createdAt}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default RenderList;
