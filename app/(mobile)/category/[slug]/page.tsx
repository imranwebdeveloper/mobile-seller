import React from "react";

const CategoryPhones = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  return (
    <section className="main">
      <section className="layout container"> Category </section>
    </section>
  );
};

export default CategoryPhones;
