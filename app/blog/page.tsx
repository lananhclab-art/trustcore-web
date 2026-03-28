"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Search } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const blogCategories = ["All", "Reports", "Knowledge", "Features", "Staking", "News", "Press Release"];

const featuredPost = {
  category: "Reports",
  readTime: "12 min read",
  title: "Digital Asset Infrastructure Is Reshaping Global Finance",
  description: "Digital asset infrastructure is transforming how financial systems operate globally. Learn how digital asset infrastructure enables scalability, security, and real-world adoption.",
  image: "/images/blog/blog-1.avif",
};

const topThreePosts = [
  {
    category: "Reports",
    readTime: "10 min read",
    title: "Digital Asset Adoption Is Moving Beyond Speculation Cycles",
    description: "Digital asset adoption is shifting toward real utility and long-term value. Explore how digital asset adoption is driven by infrastructure, usability, and sustainable growth.",
    image: "/images/blog/blog-2.avif",
  },
  {
    category: "Knowledge",
    readTime: "8 min read",
    title: "Blockchain Security: What Actually Keeps Systems Safe?",
    description: "Blockchain security relies on architecture, incentives, and system design. Discover how blockchain security works in practice and what keeps decentralized systems resilient.",
    image: "/images/blog/blog-3.avif",
  },
  {
    category: "Features",
    readTime: "9 min read",
    title: "Centralized vs Decentralized Exchanges Are Starting to Converge",
    description: "Centralized vs decentralized exchanges are evolving into hybrid models. Learn how centralized vs decentralized exchanges combine efficiency and transparency.",
    image: "/images/blog/blog-4.avif",
  },
];

const allPosts = [
  {
    category: "Knowledge",
    readTime: "6 min read",
    title: "Crypto Custody vs Self Custody: Who Controls Your Assets?",
    description: "Crypto custody vs self custody defines ownership. Understand how crypto custody models affect control, security, and asset protection.",
    image: "/images/blog/blog-5.avif",
  },
  {
    category: "Reports",
    readTime: "11 min read",
    title: "Financial Infrastructure Scaling Remains a Global Challenge Today",
    description: "Financial infrastructure scaling is critical for global markets. Learn how financial infrastructure scaling supports high demand, resilience, and continuous operation.",
    image: "/images/blog/blog-6.avif",
  },
  {
    category: "Staking",
    readTime: "7 min read",
    title: "Staking in Crypto Offers Yield but Also Introduces New Risks",
    description: "Staking in crypto can generate rewards but carries risks. Understand how staking in crypto works, how returns are created, and what factors affect security.",
    image: "/images/blog/blog-7.avif",
  },
  {
    category: "News",
    readTime: "5 min read",
    title: "Institutional Crypto Adoption Is Accelerating Across Global Markets",
    description: "Institutional crypto adoption is expanding across regions. Discover how institutional crypto adoption is shaping infrastructure demand and long-term market growth.",
    image: "/images/blog/blog-8.avif",
  },
  {
    category: "Press Release",
    readTime: "4 min read",
    title: "Digital Financial Infrastructure: TrustCore Vision for the Future",
    description: "Digital financial infrastructure is at the core of TrustCore’s strategy. Learn how digital financial infrastructure enables secure, scalable financial systems.",
    image: "/images/blog/blog-9.avif",
  },
  {
    category: "Knowledge",
    readTime: "6 min read",
    title: "Digital Asset Transactions: How Value Moves Across Networks?",
    description: "Digital asset transactions power blockchain systems. Explore how digital asset transactions are processed, validated, and settled across decentralized networks.",
    image: "/images/blog/blog-10.avif",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Consolidate all posts for easier filtering
  const allBlogPosts = [featuredPost, ...topThreePosts, ...allPosts];

  // Filter posts based on search query and category
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Split filtered posts for layout
  const displayFeatured = filteredPosts[0];
  const displayGrid = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow pt-[80px]">
        {/* --- Header Section --- */}
        <Section spacing="none" bg="white" className="pt-20 pb-16">
          <Container>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <Text as="h1" variant="heading-h1" color="primary" weight="bold" className="mb-4">
                Our <span className="text-[#007AFF]">Blogs</span>
              </Text>
              <Text variant="body-lg" weight="medium" color="secondary" className="mb-10">
                A center for all our news, resource & insights
              </Text>

              {/* Search Bar */}
              <div className="relative w-full max-w-xl group">
                <Search 
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8]" 
                  size={20} 
                />
                <input
                  type="text"
                  placeholder="Search by topic or keywords"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[56px] pl-16 pr-6 bg-white rounded-full border border-[#E8EDF2] focus:border-[#007AFF] focus:ring-4 focus:ring-[#007AFF]/5 outline-none transition-all font-medium text-[16px]"
                />
              </div>

              {/* Category Tags */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-10">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "text-[var(--Font-Body-Label-text-size,14px)] font-bold transition-all hover:opacity-70 active:scale-95 whitespace-nowrap text-[#007AFF]",
                      activeCategory === category ? "underline underline-offset-8 decoration-2" : "opacity-60"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {filteredPosts.length > 0 ? (
          <>
            {/* --- Featured Post --- */}
            {displayFeatured && (
              <Section spacing="lg" bg="white" className="pt-0">
                <Container>
                  <Link 
                    href="/blog/post" 
                    className="group grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16 items-center cursor-pointer"
                  >
                    <div className="relative w-full aspect-[16/10] rounded-[32px] overflow-hidden bg-[#F8FAFC]">
                      <Image
                        src={displayFeatured.image}
                        alt={displayFeatured.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col gap-4 lg:pr-12">
                      <div className="flex items-center gap-3">
                        <span className="text-[var(--Font-Body-Label-text-size,14px)] font-bold text-[#007AFF]">{displayFeatured.category}</span>
                        <span className="text-[var(--Font-Body-Label-text-size,14px)] text-[#007AFF] opacity-60">·</span>
                        <span className="text-[var(--Font-Body-Label-text-size,14px)] font-medium text-[#007AFF]">{displayFeatured.readTime}</span>
                      </div>
                    <Text variant="heading-h3" as="h3" color="primary" className="group-hover:text-[#007AFF] transition-all leading-tight">
                      {displayFeatured.title}
                    </Text>
                    <Text variant="body-lg" color="secondary">
                      {displayFeatured.description}
                    </Text>
                  </div>
                </Link>
              </Container>
            </Section>
          )}

          {/* --- Grid Posts --- */}
          {displayGrid.length > 0 && (
            <Section spacing="lg" bg="white" className={cn(displayFeatured ? "pt-8" : "pt-0")}>
              <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {displayGrid.map((post, idx) => (
                    <Link 
                      href={`/blog/post-${idx}`} 
                      key={idx}
                      className="group flex flex-col gap-5 cursor-pointer"
                    >
                      <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#F8FAFC]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          unoptimized
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-[var(--Font-Body-Label-text-size,14px)] font-bold text-[#007AFF]">{post.category}</span>
                          <span className="text-[var(--Font-Body-Label-text-size,14px)] text-[#007AFF] opacity-60">·</span>
                          <span className="text-[var(--Font-Body-Label-text-size,14px)] font-medium text-[#007AFF]">{post.readTime}</span>
                        </div>
                          <Text variant="heading-h4" as="h4" color="primary" className="group-hover:text-[#007AFF] transition-all line-clamp-2">
                            {post.title}
                          </Text>
                          <Text variant="body-md" color="secondary" className="opacity-80">
                            {post.description}
                          </Text>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Container>
              </Section>
            )}
          </>
        ) : (
          <Section spacing="lg" bg="white" className="pt-0 pb-32">
            <Container>
              <div className="flex flex-col items-center justify-center text-center py-20 grayscale opacity-50">
                <Search size={48} className="mb-4 text-[#64748B]" />
                <Text variant="heading-h4" color="secondary">
                  No matches found for "{searchQuery}"
                </Text>
                <Text variant="body-md" color="secondary" className="mt-2 text-[#94A3B8]">
                  Try adjusting your search or category filters.
                </Text>
              </div>
            </Container>
          </Section>
        )}
      </main>

      <Footer />
    </div>
  );
}

