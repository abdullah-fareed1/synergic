import React from 'react';
import { ArrowRight } from 'lucide-react';

// Temporary JSON data - will be replaced with API calls
const popularArticles = [
  {
    id: 1,
    title: "9 reasons why an eshop doesn't performe-shop",
  },
  {
    id: 2,
    title: "Omni-Channel commerce, what it is and how it is achieved",
  },
  {
    id: 3,
    title: "Omni-Channel commerce, what it is and how it is achieved",
  },
  {
    id: 4,
    title: "Omni-Channel commerce, what it is and how it is achieved",
  },
  {
    id: 5,
    title: "Omni-Channel commerce, what it is and how it is achieved",
  },
];

const blogArticles = [
  {
    blogId: 1,
    datetime: "2023-01-15",
    title: "Prestashop 8.1: faster and even more functional",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "ECOMMERCE SOLUTIONS",
    blogUrl: "/blog/prestashop-8-1-faster-functional",
  },
  {
    blogId: 2,
    datetime: "2023-02-20",
    title: "NSRF Subsidy for eshop 2022 – 2023",
    imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    category: "WEB PRESENCE SOLUTIONS",
    blogUrl: "/blog/nsrf-subsidy-eshop-2022-2023",
  },
  {
    blogId: 3,
    datetime: "2023-03-10",
    title: "What is the best platform for creating an eshop in 2023?",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "ECOMMERCE SOLUTIONS",
    blogUrl: "/blog/best-platform-eshop-2023",
  },
  {
    blogId: 4,
    datetime: "2023-04-05",
    title: "NSRF Subsidy for eshop 2023",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "WEB PRESENCE SOLUTIONS",
    blogUrl: "/blog/nsrf-subsidy-eshop-2023",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Popular Articles */}
          <div className="lg:col-span-3 bg-white rounded-lg p-6 shadow-sm h-fit">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              POPULAR ARTICLES
            </h3>
            <ul className="space-y-4">
              {popularArticles.map((article) => (
                <li key={article.id} className="flex items-start">
                  <span className="shrink-0 w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></span>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors leading-relaxed"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-gray-900 mt-8 hover:gap-2 transition-all group"
            >
              View all articles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Main Content - Blog Grid */}
          <div className="lg:col-span-9">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                TECH BLOG & NEWS
              </h2>
              <p className="text-gray-600 max-w-3xl">
                Useful information about e-commerce, eshops, platforms, portals and modern software
                technologies for commerce and business
              </p>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {blogArticles.map((article) => (
                <a
                  key={article.blogId}
                  href={article.blogUrl}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-4/3">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">
                      {article.category}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>

            {/* View All Link - Mobile */}
            <div className="mt-8 lg:hidden">
              <a
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:gap-2 transition-all group"
              >
                View all articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;