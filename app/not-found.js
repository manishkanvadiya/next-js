import Layout from "@/components/Layout/Layout";
import React from "react";

export const metadata = {
  title: " 404 Page",
  description: "Developed by",
};

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">Main Page not found</div>
    </Layout>
  );
};

export default NotFound;
