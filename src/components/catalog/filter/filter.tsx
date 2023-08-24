"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./filter.module.scss";
import productService from "@/services/product";
import { FilterEnum } from "@/components/catalog/filter/filter.types";

export const Filter = () => {
  const [filter, setFilter] = useState<FilterEnum>(FilterEnum.HighestPrice);
  const isMounted = useRef(false);

  const getProducts = useCallback(async () => {
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
  }, [filter]);

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
        <option key={option} value={option}>
          {FilterEnum[option as keyof typeof FilterEnum]}
        </option>
      ))}
    </select>
  );
};
