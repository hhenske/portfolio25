import React from "react";
import { useParams, Navigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import categoryData from "../data/categoryData";
import "../App.css";

const Category = () => {
  const { category } = useParams();
  
  // Get the data for this category
  const data = categoryData[category];

  // If category doesn't exist, redirect to home
  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="page category-page">
      <CategoryCard 
        category={data.title}
        carouselItems={data.carouselItems}
        collageImages={data.collageImages}
      />
    </main>
  );
};

export default Category;