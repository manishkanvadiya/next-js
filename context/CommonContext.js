"use client";
import { blogData } from "@/data";
import React, { createContext, useContext, useEffect, useState } from "react";

const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
  // blog
  const blogPerPage = 5;

  const [currentBlogPage, setCurrentBlogPage] = useState(1);

  const startBlogIndex = (currentBlogPage - 1) * blogPerPage;
  const endBlogIndex = startBlogIndex + blogPerPage;
  const currentBlogItems = blogData.slice(startBlogIndex, endBlogIndex);

  const totalBlogPages = Math.ceil(blogData.length / blogPerPage);

  const handleBlogPageChange = (newPage) => {
    setCurrentBlogPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };

  // blog

  return (
    <CommonContext.Provider
      value={{
        totalBlogPages,
        currentBlogItems,
        currentBlogPage,
        handleBlogPageChange,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

// create a hook for using commo context

export const useCommonContext = () => {
  const context = useContext(CommonContext);
  if (!context) {
    throw new Error("useEduorContext must be used within an EduorProvider");
  }
  return context;
};
