"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Temporary JSON data - will be replaced with API calls
const popularArticles = [
  { id: 1, title: "9 reasons why an eshop doesn't performe-shop" },
  { id: 2, title: "Omni-Channel commerce, what it is and how it is achieved" },
  { id: 3, title: "Omni-Channel commerce, what it is and how it is achieved" },
  { id: 4, title: "Omni-Channel commerce, what it is and how it is achieved" },
  { id: 5, title: "Omni-Channel commerce, what it is and how it is achieved" },
];

const blogArticles = [
  {
    blogId: 1,
    datetime: "2023-01-15",
    title: "Prestashop 8.1: faster and even more functional",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "ECOMMERCE SOLUTIONS",
    blogUrl: "/blog/prestashop-8-1-faster-functional",
  },
  {
    blogId: 2,
    datetime: "2023-02-20",
    title: "NSRF Subsidy for eshop 2022 – 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    category: "WEB PRESENCE SOLUTIONS",
    blogUrl: "/blog/nsrf-subsidy-eshop-2022-2023",
  },
  {
    blogId: 3,
    datetime: "2023-03-10",
    title: "What is the best platform for creating an eshop in 2023?",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "ECOMMERCE SOLUTIONS",
    blogUrl: "/blog/best-platform-eshop-2023",
  },
  {
    blogId: 4,
    datetime: "2023-04-05",
    title: "NSRF Subsidy for eshop 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "WEB PRESENCE SOLUTIONS",
    blogUrl: "/blog/nsrf-subsidy-eshop-2023",
  },
  {
    blogId: 5,
    datetime: "2023-05-12",
    title: "The future of e-commerce automation",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "ECOMMERCE SOLUTIONS",
    blogUrl: "/blog/future-ecommerce-automation",
  },
  {
    blogId: 6,
    datetime: "2023-06-18",
    title: "Digital marketing strategies for 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop",
    category: "WEB PRESENCE SOLUTIONS",
    blogUrl: "/blog/digital-marketing-strategies",
  },
];

const BlogCarousel: React.FC<{ articles: typeof blogArticles; isDesktop?: boolean }> = ({ 
  articles,
  isDesktop = false 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = isDesktop ? 3.5 : 1.5;
  const maxIndex = Math.max(0, articles.length - itemsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (carouselRef.current) {
      const scrolled = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.scrollWidth / articles.length;
      const newIndex = Math.round(scrolled / itemWidth);
      setCurrentIndex(Math.min(Math.max(0, newIndex), maxIndex));
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / articles.length;
      carouselRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, articles.length]);

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            width: `${(articles.length / itemsPerView) * 100}%`,
          }}
        >
          {articles.map((article) => (
            <div
              key={article.blogId}
              className={`${isDesktop ? 'px-3' : 'px-2'} shrink-0`}
              style={{ width: `${100 / articles.length}%` }}
            >
              <a
                href={article.blogUrl}
                className="group bg-white rounded-lg overflow-hidden transition-all block"
                onClick={(e) => {
                  if (isDragging) e.preventDefault();
                }}
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    draggable="false"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-gray-500 mb-2">
                    {article.category}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {article.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {currentIndex > 0 && (
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gray-900 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <section className="bg-white pt-16 md:pt-20 pb-4 relative overflow-hidden min-h-150">
      <div className="hidden lg:block absolute left-[5.56%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
      <div className="hidden lg:block absolute left-[27.78%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />
      <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-400 opacity-0" />
      <div className="hidden lg:block absolute left-[72.22%] top-0 bottom-0 w-px bg-gray-400 opacity-0" />
      <div className="hidden lg:block absolute left-[94.44%] top-0 bottom-0 w-px bg-gray-400 opacity-30" />

      {/* Mobile */}
      <div className="lg:hidden px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            TECH BLOG & NEWS
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Useful information about e-commerce, eshops, platforms, portals and
            modern software technologies for commerce and business
          </p>
        </div>

        <BlogCarousel articles={blogArticles} isDesktop={false} />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex">
          <div
            style={{
              marginLeft: "5.56%",
              width: "22.22%",
            }}
          >
            <div className="pr-8 pl-5 mb-32">
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                POPULAR ARTICLES
              </h3>

              <ul className="space-y-4 mb-8">
                {popularArticles.map((article) => (
                  <li key={article.id} className="flex items-start">
                    <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 shrink-0" />
                    <a className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="/blog"
              className="flex items-center justify-between w-full text-sm font-medium text-gray-900 py-3 px-4 bg-[#F3F3EE] border-t border-b border-gray-300 hover:bg-gray-200 transition-colors"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div style={{ width: "66.66%", position: "relative" }}>
            <div className="pl-8 pr-8">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  TECH BLOG & NEWS
                </h3>
                <p className="text-gray-600 max-w-3xl">
                  Useful information about e-commerce, eshops, platforms,
                  portals and modern software technologies for commerce and
                  business
                </p>
              </div>

              <BlogCarousel articles={blogArticles} isDesktop={true} />
            </div>
            
            {/* Large BLOG text */}
            <div className="absolute bottom-4 right-0 pr-8 pointer-events-none">
              <div className="text-[100px] font-bold text-gray-400 opacity-20 leading-none select-none">
                BLOG
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;