import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
import React, { useState } from "react";
import shortid from "shortid";
import * as style from "./RenderList.module.scss";
import { Modal } from "antd";
import EditWorker from "../EditWorker";

function RenderList({ list, del, fnUpdate }) {
  const [visibleDelModal, setVisibleDelModal] = useState(false);
  const [editId, setEditId] = useState("");

  const formateDate = (data) => {
    const date = new Date(data);

    return `${date.getDate() + 1}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  const confirm = ({ currentTarget }) => {
    Modal.confirm({
      title: "Удалить?",
      icon: <ExclamationCircleOutlined />,
      okText: "Удалить",
      onOk: (e) => {
        del(currentTarget.dataset.id);
        e();
        fnUpdate();
      },
      cancelText: "Отмена",
    });
  };

  const onEdit = ({ currentTarget }) => {
    setEditId(currentTarget.dataset.id);
    setVisibleDelModal(true);
  };

  const onClose = () => setVisibleDelModal(false);

  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ФИО</th>
            <th>Пол</th>
            <th>Контакты</th>
            <th>Дата рождения</th>
            <th>Оклад</th>
            <th>Должность</th>
            <th>Дата записи</th>
            <th>Упр.</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 &&
            list.map((el) => (
              <tr key={shortid.generate()}>
                <td>{el.id}</td>
                <td>{el.fullName}</td>
                <td>{el.gender}</td>
                <td>{el.contact}</td>
                <td>{el.dob}</td>
                <td>{el.salary}</td>
                <td>{el.status}</td>
                <td>{formateDate(el.createdAt)}</td>
                <td>
                  <button
                    data-id={el.id}
                    onClick={onEdit}
                    className={clsx(style.btn, style.edit)}
                  >
                    <EditOutlined />
                  </button>
                  <button
                    onClick={confirm}
                    data-id={el.id}
                    className={clsx(style.btn, style.del)}
                  >
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <EditWorker
        update={fnUpdate}
        show={visibleDelModal}
        onClose={onClose}
        id={editId}
      />
    </>
  );
}

export default RenderList;
