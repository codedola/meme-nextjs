import React, { useMemo, useState } from "react";
import styles from "./Header.module.scss";
import { Popover, List, Input, Empty } from "antd";
import {
  CaretDownOutlined,
  SearchOutlined,
  CloseOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useGlobalState } from "../../state";
import { TypeCategory } from "../../state/typeState";
import IconSecret from "../Share/IconSecret";
import Highlighter from "react-highlight-words";
type TypeCategoryResult = {
  result: TypeCategory[];
  notResult: TypeCategory[];
};
const HeaderCategories: React.FC = () => {
  const [categories] = useGlobalState("categories");
  const [searchCate, setSearchCate] = useState("");

  const categoriesFilter = useMemo(() => {
    const searchText = searchCate.toLowerCase();
    return categories.reduce(
      (preValue: TypeCategoryResult, category: TypeCategory) => {
        const textCategory = category.text.toLowerCase();
        if (searchText !== "" && textCategory.includes(searchText)) {
          preValue.result.push(category);
        } else {
          preValue.notResult.push(category);
        }
        return preValue;
      },
      { result: [], notResult: [] }
    );
  }, [categories, searchCate]);

  const onChangeSearch = (e: any) => {
    setSearchCate(e.target.value);
  };

  const onClearTextInput = () => {
    setSearchCate("");
  };
  return (
    <Popover
      content={
        <>
          <div className={styles.SearchCategories}>
            <Input
              placeholder="Tìm kiếm danh mục..."
              value={searchCate}
              onChange={onChangeSearch}
              bordered={false}
            />
            {searchCate !== "" ? (
              <CloseOutlined className={styles.ClearText} onClick={onClearTextInput} />
            ) : (
              <SearchOutlined />
            )}
          </div>

          <List className={styles.ListMenuCategory}>
            {searchCate !== "" && categoriesFilter.result.length === 0 && (
              <List.Item className={styles.MenuItemEmpty}>
                <Empty
                  className={styles.EmptyBox}
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={"Danh mục không tồn tại"}
                />
              </List.Item>
            )}

            {categoriesFilter.result.length > 0 &&
              categoriesFilter.result.map((category: TypeCategory, index: number) => {
                return (
                  <List.Item key={index} className={styles.MenuItemCategory}>
                    <Link href={`/categories/${category.id}`}>
                      <a>
                        <IconSecret />
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={[searchCate]}
                          autoEscape={true}
                          textToHighlight={category.text}
                        />
                      </a>
                    </Link>
                  </List.Item>
                );
              })}
            {categoriesFilter.notResult.length > 0 &&
              categoriesFilter.notResult.map((category: TypeCategory, index: number) => {
                return (
                  <List.Item key={index} className={styles.MenuItemCategory}>
                    <Link href={`/categories/${category.id}`}>
                      <a>
                        <IconSecret /> {category.text}
                      </a>
                    </Link>
                  </List.Item>
                );
              })}
          </List>
        </>
      }
      //   visible={true}
      overlayInnerStyle={{ borderRadius: 12 }}
    >
      <p className={styles.CategoryBtn}>
        Categories
        <CaretDownOutlined />
      </p>
    </Popover>
  );
};

export default HeaderCategories;
