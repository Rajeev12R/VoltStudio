import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const BlogPost = ({ title, excerpt, image, date, author }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-sm text-gray-500 mb-2">
        {date} | By {author}
      </p>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <button className="flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
        Read More
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </motion.div>
)

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Marketing: Trends to Watch in 2023",
      excerpt: "Explore the emerging trends that will shape the digital marketing landscape in the coming year.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      date: "June 15, 2023",
      author: "Emily Brown",
    },
    {
      title: "Mastering SEO: A Comprehensive Guide for Beginners",
      excerpt: "Learn the fundamentals of Search Engine Optimization and how to improve your website's visibility.",
      image:
        "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "June 10, 2023",
      author: "John Smith",
    },
    {
      title: "The Power of Visual Storytelling in Brand Marketing",
      excerpt: "Discover how visual content can elevate your brand and connect with your audience on a deeper level.",
      image:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      date: "June 5, 2023",
      author: "Jane Doe",
    },
  ]

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
  )
}

export default Blog

