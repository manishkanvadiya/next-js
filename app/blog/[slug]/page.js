import React from "react";
import { blogData } from "@/data";
import Layout from "@/components/Layout/Layout";
import BlogDetailSection from "@/components/Blog/BlogDetailSection";
import ErrorSection from "@/components/error/ErrorSection";
export const metadata = {
  title: "Blog Details Page",
  description: "Developed by ",
};
const BlogDetails = ({ params }) => {
  const { slug } = params;
  const blogDesc = blogData.find((item) => item.slug === slug);
  return (
    <Layout>
      {blogDesc ? (
        <BlogDetailSection blogDesc={blogDesc} />
      ) : (
        <ErrorSection type={"new blog"} />
      )}
    </Layout>
  );
};

export default BlogDetails;
