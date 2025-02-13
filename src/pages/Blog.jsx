import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = ({ title, excerpt, image, date, author, id }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-2">
        {date} | By {author}
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link
        to={`/blog/${id}`}
        className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
      >
        Read More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </motion.div>
);

const Blog = () => {
  const blogPosts = [
    {
      id: "digital-marketing-trends-2025",
      title: "Digital Marketing Trends to Watch in 2025",
      excerpt: "Discover the key trends shaping the future of digital marketing in 2025 and how to stay ahead of the curve.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      date: "January 10, 2025",
      author: "Saakshi Priyadarshini",
    },
    {
      id: "top-seo-tips-2025",
      title: "Top SEO Tips for 2025 — Whiteboard Friday",
      excerpt: "Learn the six top SEO strategies for 2025, including driving brand awareness and diversifying traffic sources.",
      image:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "January 15, 2025",
      author: "Chima Mmeje",
    },
    {
      id: "keyword-cannibalization",
      title: "Keyword Cannibalization: What it is and How to Fix it",
      excerpt: "Learn how to identify and resolve keyword cannibalization issues to protect your rankings and drive more conversions.",
      image:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      date: "January 20, 2025",
      author: "Success Olagboye",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and tips in digital marketing and design.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;