"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./filter.module.scss";
import productService from "@/services/product";
import { FilterEnum } from "@/components/catalog/filter/filter.types";
import { CatalogContext } from "@/providers/catalog";

export const Filter = () => {
  const isMounted = useRef(false);
  const { setUpdatedProductList } = useContext(CatalogContext);
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.HighestPrice);

  const getProducts = useCallback(async () => {
    try {
      let param = "";
      let order = "";

      if (filter === FilterEnum.HighestPrice) {
        param = "price";
        order = "desc";
      }
      if (filter === FilterEnum.LowestPrice) {
        param = "price";
        order = "asc";
      }
      if (filter === FilterEnum.AZ) {
        param = "title";
        order = "asc";
      }
      if (filter === FilterEnum.ZA) {
        param = "title";
        order = "desc";
      }

      const productList = await productService.getProducts(param, order);
      setUpdatedProductList(productList);
    } catch (error) {
      console.error(error);
    }
  }, [filter, setUpdatedProductList]);

  useEffect(() => {
    if (isMounted.current) {
      getProducts();
    } else {
      isMounted.current = true;
    }
  }, [getProducts]);

  return (
    <select
      className={styles.select}
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value as FilterEnum);
      }}
    >
      {Object.keys(FilterEnum).map((option) => (
        <option
          key={option}
          value={FilterEnum[option as keyof typeof FilterEnum]}
        >
          {FilterEnum[option as keyof typeof FilterEnum]}
        </option>
      ))}
    </select>
  );
};
