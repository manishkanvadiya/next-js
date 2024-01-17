"use client";
import React from "react";
import { blogData } from "@/data";
import Link from "next/link";
const BlogDetailSection = ({ blogDesc }) => {
  return (
    <>
      <img
        src={`/${blogDesc.imgSrc}`}
        alt="blog details"
        className="img-fluid w-100"
      />
      <ul className="date d-flex flex-wrap">
        <li>
          <i className="far fa-user-edit"></i> {blogDesc.author}
        </li>
        <li>
          <i className="fal fa-calendar-alt"></i> {blogDesc.date}
        </li>
      </ul>
      <h3>{blogDesc.longTitle}</h3>
      <p>{blogDesc.longDesc}</p>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don look even slightly believable. If you are
        going to use a passage of Lorem Ipsum,bean you need to be sure there
        isn't anything embarrassing hidden in the middle of text. All the Lorem
        Ipsum generators on the Internet tend to repeat predefined chunks
        necessary, making this the first true generator on the Internet.{" "}
      </p>
      <div className="tf__details_quot_text">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, oris ut. In interdum sem quis congue accumsan. Pellentesque
          convallis scelerisque eros. Etiam vestibulum ultricies finibus. . Nunc
          ac sem sit amet purus luctus lobortis dui inorci.
        </p>
        <h4>Porata Masat</h4>
        <h5>Devlopment</h5>
      </div>
      <p>
        Lorem ipsum is simply free text dolor sit amet, consectetur notted
        adipisicing elit eiusmod tempor incididunt ut abore et dolore magna
        aliqua lonm andhn is a lon established fact that a reader will be
        distracted by the readable content
      </p>
      <ul className="list">
        <li>Business school's Institut constructivism.</li>
        <li>We give management school best.</li>
        <li>Media in this school solution.</li>
      </ul>

      <div className="tf__sidebar_blog sidebar_item">
        <h3>Recent Post</h3>
        <ul>
          {blogData.slice(0, 3).map((item) => (
            <li key={item.id}>
              <div className="img">
                <img
                  src={`/${item.imgSrc}`}
                  alt="blog"
                  className="img-fluid w-100"
                />
              </div>
              <div className="text">
                <p>
                  <i className="far fa-calendar-alt"></i> {item.date}
                </p>
                <Link href={`/blog/${item.slug}`}>{item.title}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogDetailSection;
