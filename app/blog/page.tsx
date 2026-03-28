"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { Search, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const blogCategories = ["All", "Reports", "Knowledge", "Features", "Staking", "News", "Press Release"];

const featuredPosts = [
  {
    category: "Reports",
    readTime: "12 min read",
    title: "Digital Asset Infrastructure Is Reshaping Global Finance",
    description: "Digital asset infrastructure is transforming how financial systems operate globally. Learn how digital asset infrastructure enables scalability, security, and real-world adoption.",
    image: "/images/blog/blog-1.png",
  },
  {
    category: "Reports",
    readTime: "10 min read",
    title: "Digital Asset Adoption Is Moving Beyond Speculation Cycles",
    description: "Digital asset adoption is shifting toward real utility and long-term value. Explore how digital asset adoption is driven by infrastructure, usability, and sustainable growth.",
    image: "/images/blog/blog-2.png",
  },
  {
    category: "Knowledge",
    readTime: "8 min read",
    title: "Blockchain Security: What Actually Keeps Systems Safe?",
    description: "Blockchain security relies on architecture, incentives, and system design. Discover how blockchain security works in practice and what keeps decentralized systems resilient.",
    image: "/images/blog/blog-3.png",
  },
  {
    category: "Features",
    readTime: "9 min read",
    title: "Centralized vs Decentralized Exchanges Are Starting to Converge",
    description: "Centralized vs decentralized exchanges are evolving into hybrid models. Learn how centralized vs decentralized exchanges combine efficiency and transparency.",
    image: "/images/blog/blog-4.png",
  },
];

const allPosts = [
  {
    category: "Knowledge",
    readTime: "6 min read",
    title: "Crypto Custody vs Self Custody: Who Controls Your Assets?",
    description: "Crypto custody vs self custody defines ownership. Understand how crypto custody models affect control, security, and asset protection.",
    image: "/images/blog/blog-5.png",
  },
  {
    category: "Reports",
    readTime: "11 min read",
    title: "Financial Infrastructure Scaling Remains a Global Challenge Today",
    description: "Financial infrastructure scaling is critical for global markets. Learn how financial infrastructure scaling supports high demand, resilience, and continuous operation.",
    image: "/images/blog/blog-6.png",
  },
  {
    category: "Staking",
    readTime: "7 min read",
    title: "Staking in Crypto Offers Yield but Also Introduces New Risks",
    description: "Staking in crypto can generate rewards but carries risks. Understand how staking in crypto works, how returns are created, and what factors affect security.",
    image: "/images/blog/blog-5.png",
  },
  {
    category: "News",
    readTime: "5 min read",
    title: "Institutional Crypto Adoption Is Accelerating Across Global Markets",
    description: "Institutional crypto adoption is expanding across regions. Discover how institutional crypto adoption is shaping infrastructure demand and long-term market growth.",
    image: "/images/blog/blog-1.png",
  },
  {
    category: "Press Release",
    readTime: "4 min read",
    title: "Digital Financial Infrastructure: TrustCore Vision for the Future",
    description: "Digital financial infrastructure is at the core of TrustCore’s strategy. Learn how digital financial infrastructure enables secure, scalable financial systems.",
    image: "/images/blog/blog-2.png",
  },
  {
    category: "Knowledge",
    readTime: "6 min read",
    title: "Digital Asset Transactions: How Value Moves Across Networks?",
    description: "Digital asset transactions power blockchain systems. Explore how digital asset transactions are processed, validated, and settled across decentralized networks.",
    image: "/images/blog/blog-3.png",
  },
  {
    category: "Features",
    readTime: "8 min read",
    title: "Crypto Liquidity Systems Are Solving Fragmented Market Access",
    description: "Crypto liquidity systems connect fragmented markets efficiently. Learn how crypto liquidity systems improve execution, pricing, and overall market depth.",
    image: "/images/blog/blog-4.png",
  },
  {
    category: "Reports",
    readTime: "10 min read",
    title: "Financial Systems Evolution Is Redefining Global Market Structure",
    description: "Financial systems evolution is reshaping traditional finance. Understand how financial systems evolution is driven by blockchain, decentralization, and new models.",
    image: "/images/blog/blog-6.png",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Header onDark={false} />

      <main className="flex-grow pt-[86px]">
        {/* --- Hero Section --- */}
        <Section spacing="lg" bg="white">
          <Container>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-12">
              <Text as="h1" variant="heading-h1" color="primary" weight="bold" className="mb-6">
                Our Blogs
              </Text>
              <Text variant="body-lg" weight="medium" color="secondary" className="mb-12">
                A center for all our news, resource & insights
              </Text>

              {/* Search Bar */}
              <div className="relative w-full max-w-2xl group">
                <Search 
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-[#8E8E93] group-focus-within:text-[#007AFF] transition-colors" 
                  size={20} 
                />
                <input
                  type="text"
                  placeholder="Search by topic or keywords…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[64px] pl-16 pr-6 bg-[#F5F5F7] rounded-full border-none focus:ring-2 focus:ring-[#007AFF]/20 transition-all font-medium text-[16px]"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-6 py-2.5 rounded-full text-[14px] font-bold transition-all",
                      activeCategory === cat 
                        ? "bg-[#007AFF] text-white" 
                        : "bg-[#F5F5F7] text-[#8E8E93] hover:bg-[#E5E5EA] hover:text-[#1C1C1E]"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* --- Featured Posts --- */}
        <Section spacing="lg" bg="white" className="pt-0">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {featuredPosts.map((post, idx) => (
                <Link 
                  href={`/blog/${idx}`} 
                  key={idx}
                  className="group flex flex-col items-start gap-6 cursor-pointer"
                >
                  <div className="relative w-full aspect-[16/9] rounded-[32px] overflow-hidden bg-[#F5F5F7]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-bold text-[#007AFF] uppercase tracking-wider">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-[#D1D1D6]" />
                      <span className="text-[12px] font-medium text-[#8E8E93]">{post.readTime}</span>
                    </div>
                    <Text variant="heading-h3" as="h3" color="primary" className="group-hover:text-[#007AFF] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </Text>
                    <Text variant="body-md" color="secondary" className="line-clamp-2 opacity-80">
                      {post.description}
                    </Text>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* --- All Blog Posts --- */}
        <Section spacing="lg" bg="white" className="border-t border-[#F2F2F7]">
          <Container>
            <div className="flex flex-col gap-12">
              <Text variant="heading-h2" as="h2" weight="bold" color="primary">
                All Blog Posts
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {allPosts.map((post, idx) => (
                  <Link 
                    href={`/blog/${idx + 4}`} 
                    key={idx}
                    className="group flex flex-col gap-5 cursor-pointer"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#F5F5F7]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#007AFF] uppercase">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-[#D1D1D6]" />
                        <span className="text-[11px] font-medium text-[#8E8E93]">{post.readTime}</span>
                      </div>
                      <Text variant="heading-h5" as="h5" color="primary" className="group-hover:text-[#007AFF] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </Text>
                      <Text variant="body-md" color="secondary" className="line-clamp-2 text-[15px] opacity-70">
                        {post.description}
                      </Text>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
