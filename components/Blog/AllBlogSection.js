"use client";
import { useCommonContext } from "@/context/commonContext";
import Link from "next/link";
import React from "react";

const AllBlogSection = () => {
  const {
    currentBlogPage,
    currentBlogItems,
    handleBlogPageChange,
    totalBlogPages,
  } = useCommonContext();
  console.log(currentBlogItems);
  return (
    <>
      <div className="common-full">
        <h5>LATEST NEWS & BLOG</h5>
        <h2>Our latest Blog And News.</h2>
      </div>

      <div className="blog">
        {currentBlogItems.map((item) => (
          <div className="blog-post" key={item.id}>
            <Link className="tf__single_blog_img" href={`/blog/${item.slug}`}>
              <img src={item.imgSrc} alt="blog" className="img-fluid w-100" />
            </Link>
            <div className="tf__single_blog_text">
              <br />
              <Link className={`category ${item.color}`} href="#">
                {item.category}
              </Link>
              <br />
              <br />
              <br />
              <br />

              <Link className="title" href={`/blog/${item.slug}`}>
                {item.title}
              </Link>
              {/* <p>{item.desc}</p> */}
              <Link className="read_btn" href={`/blog/${item.slug}`}>
                Read More <i className="fas fa-chevron-circle-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <nav className="pagination">
        <ul>
          <li>
            <button
              className={`page-link ${currentBlogPage === 1 ? "disabled" : ""}`}
              disabled={currentBlogPage === 1 ? true : false}
              onClick={() => handleBlogPageChange(currentBlogPage - 1)}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalBlogPages }, (_, index) => (
            <li className="page-item" key={index}>
              <button
                className={`page-link ${
                  currentBlogPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handleBlogPageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className="page-item">
            <a
              className={`page-link ${
                currentBlogPage === totalBlogPages ? "disabled" : ""
              }`}
              aria-label="Next"
              onClick={() => handleBlogPageChange(currentBlogPage + 1)}
            >
              <i className="far fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AllBlogSection;
