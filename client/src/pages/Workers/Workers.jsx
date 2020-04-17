import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import RenderList from "../../components/RenderList";
import { Pagination } from "antd";
import { Input } from "antd";
import NewWorkers from "./../../components/NewWorkers";

const { Search } = Input;
// import * as style from "./Workers.module.scss";

function Workers({ getListWorkers, total }) {
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(10);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    getListWorkers({ page, limit, fullName });
  }, [page, limit, fullName]);

  const updateList = () => getListWorkers({ page, limit, fullName });

  const onShowSizeChange = (current, pageSize) => setlimit(pageSize);

  const onChange = (page) => setPage(page);

  const onSearch = (val) => setFullName(val);

  return (
    <>
      <Header />
      <Search
        placeholder="Поиск по имени"
        enterButton="Search"
        onSearch={onSearch}
      />
      <RenderList fnUpdate={updateList} />
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={page}
        onChange={onChange}
        total={total}
      />
      <NewWorkers fnUpdate={updateList} />
    </>
  );
}

export default Workers;
