import React, { useState } from "react";
import { useRouter } from "next/router";
const HeaderSearch: React.FC = () => {
  const router = useRouter();
  const [queryStr, setQueryStr] = useState("");

  const onChangeSearch = (e: any) => {
    setQueryStr(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchText = queryStr.trim();
    if (searchText !== "") {
      router.push("/search?q=" + searchText);
    }
  };
  return (
    <div className="ass1-header__search">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="search"
            value={queryStr}
            onChange={onChangeSearch}
            name="search-text"
            className="form-control"
            placeholder="Nhập từ khóa ..."
          />
          <i className="fa fa-search" aria-hidden="true" style={{ color: "gray" }}></i>
        </label>
      </form>
    </div>
  );
};

export default HeaderSearch;
