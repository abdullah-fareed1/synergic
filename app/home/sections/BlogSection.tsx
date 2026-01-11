"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { GridSection, GridContainer, GridCol } from "../../components/grid";

const popularArticles = [
  { id: 1, title: "9 reasons why an eshop doesn't perform", url: "#" },
  { id: 2, title: "Omni-Channel commerce, what it is and how it is achieved", url: "#" },
  { id: 3, title: "Omni-Channel commerce, what it is and how it is achieved", url: "#" },
  { id: 4, title: "Omni-Channel commerce, what it is and how it is achieved", url: "#" },
  { id: 5, title: "Omni-Channel commerce, what it is and how it is achieved", url: "#" },
];

const blogArticles = [
  {
    blogId: 1,
    datetime: "2025-01-15",
    title: "Prestashop 8.1: faster and even more functional",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "ECOMMERCE SOLUTIONS",
    blogUrl: "#",
  },
  {
    blogId: 2,
    datetime: "2025-02-20",
    title: "NSRF Subsidy for eshop 2022 – 2023",
    imageUrl: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&h=600&fit=crop",
    category: "WEB PRESENCE SOLUTIONS",
    blogUrl: "#",
  },
  {
    blogId: 3,
    datetime: "2025-03-10",
    title: "What is the best platform for creating an eshop in 2023?",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "ECOMMERCE SOLUTIONS",
    blogUrl: "#",
  },
  {
    blogId: 4,
    datetime: "2025-04-05",
    title: "NSRF Subsidy for eshop 2023",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    category: "WEB PRESENCE SOLUTIONS",
    blogUrl: "#",
  },
  {
    blogId: 5,
    datetime: "2025-05-12",
    title: "The future of e-commerce automation",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "ECOMMERCE SOLUTIONS",
    blogUrl: "#",
  },
  {
    blogId: 6,
    datetime: "2025-06-18",
    title: "Digital marketing strategies for 2023",
    imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop",
    category: "WEB PRESENCE SOLUTIONS",
    blogUrl: "#",
  },
];

const DesktopBlogCarousel: React.FC<{ articles: typeof blogArticles }> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const cardWidth = 260;
  const gap = 24;
  const visibleCards = 4;
  const maxIndex = Math.max(0, articles.length - visibleCards);

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex * (cardWidth + gap));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = startX - x;
    const newScrollLeft = scrollLeft + walk;
    const newIndex = Math.round(newScrollLeft / (cardWidth + gap));
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= maxIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative z-50">
      <div
        ref={carouselRef}
        className="overflow-visible cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
          }}
        >
          {articles.map((article) => (
            <div
              key={article.blogId}
              className="shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              <a
                href={article.blogUrl}
                className="group block"
                onClick={(e) => {
                  if (isDragging) e.preventDefault();
                }}
              >
                <div className="aspect-4/3 overflow-hidden rounded-sm">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    draggable="false"
                  />
                </div>
                <div className="pt-4">
                  <div className="text-base font-bold text-gray-600 mb-2 tracking-wide">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">
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
          className="absolute left-0 top-25 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

const MobileBlogCarousel: React.FC<{ articles: typeof blogArticles }> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 1.5;
  const maxIndex = Math.max(0, articles.length - itemsPerView);

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
              className="px-2 shrink-0"
              style={{ width: `${100 / articles.length}%` }}
            >
              <a
                href={article.blogUrl}
                className="group bg-white overflow-hidden transition-all block"
                onClick={(e) => {
                  if (isDragging) e.preventDefault();
                }}
              >
                <div className="aspect-4/3 overflow-hidden rounded-lg">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    draggable="false"
                  />
                </div>
                <div className="py-5 pr-5">
                  <div className="text-sm font-bold text-gray-500 mb-2 tracking-wide">
                    {article.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {article.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden bg-white pt-16 pb-4 overflow-hidden">
        <div className="px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              TECH BLOG & NEWS
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl">
              Useful information about e-commerce, eshops, platforms, portals and
              modern software technologies for commerce and business
            </p>
          </div>
        </div>

        <div className="pl-4 sm:pl-6">
          <MobileBlogCarousel articles={blogArticles} />
        </div>

        <div className="px-4 sm:px-6 mt-6">
          <div className="text-[48px] font-bold text-gray-400 opacity-20 leading-none select-none pointer-events-none h-14 flex items-center">
            BLOG
          </div>
        </div>

        <div className="py-4">
          <a
            href="#"
            className="flex items-center justify-between w-full text-base font-semibold text-gray-900 h-14 px-4 sm:px-6 bg-[#F3F3EE] hover:bg-gray-200 transition-colors"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Desktop */}
      <GridSection
        desktopOnly={true}
        showLines={[true, true, false, false, true]}
        bgColor="bg-white"
        className="pt-20"
      >
        <GridContainer>
          <GridCol span="A" className="pr-8 pl-5 pt-0">
            <h3 className="text-base font-bold text-gray-900 mb-6 tracking-wide">
              POPULAR ARTICLES
            </h3>

            <ul className="space-y-4">
              {popularArticles.map((article) => (
                <li key={article.id} className="flex items-start">
                  <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 shrink-0" />
                  <a
                    href={article.url}
                    className="text-lg text-gray-600 hover:text-gray-900 cursor-pointer leading-relaxed"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </GridCol>

          <GridCol span="BCD" className="overflow-visible relative z-40">
            <div className="pl-30">
              <div className="mb-8">
                <h3 className="text-base font-bold text-gray-900 mb-3 tracking-wide">
                  TECH BLOG & NEWS
                </h3>
                <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                  Useful information about e-commerce, eshops, platforms, portals and
                  modern software technologies for commerce and business
                </p>
              </div>

              <DesktopBlogCarousel articles={blogArticles} />
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>

      {/* Desktop */}
      <GridSection
        desktopOnly={true}
        showLines={[true, true, false, false, true]}
        bgColor="bg-white"
        className="pt-16 pb-8"
      >
        <GridContainer className="items-start">
          <GridCol span="A" className="pt-0">
            <a
              href="#"
              className="flex items-center justify-between w-full text-base font-semibold text-gray-900 py-4 px-5 bg-[#F3F3EE] hover:bg-gray-200 transition-colors"
              style={{ marginLeft: '0', width: '100%' }}
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </GridCol>

          <GridCol span="BCD" position="relative" className="h-28">
            <div className="absolute bottom-0 right-2 text-[100px] font-bold text-gray-400 opacity-20 leading-none select-none pointer-events-none text-right">
              BLOG
            </div>
          </GridCol>
        </GridContainer>
      </GridSection>
    </>
  );
};

export default BlogSection;