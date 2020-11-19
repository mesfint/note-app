import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { Search } = Input;

function AppSearch() {
  return (
    <div>
      <Search
        className="inputSearch"
        placeholder="input search text"
        enterButton
      />
    </div>
  );
}

export default AppSearch;
