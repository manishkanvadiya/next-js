import AllBlogSection from "@/components/Blog/AllBlogSection";
import Layout from "@/components/Layout/Layout";
import React from "react";

export const metadata = {
  title: "Blog Page",
  description: "Developed ",
};
const Blog = () => {
  return (
    <Layout>
      <AllBlogSection />
    </Layout>
  );
};

export default Blog;
