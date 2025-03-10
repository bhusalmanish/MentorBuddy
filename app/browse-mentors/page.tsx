"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Star, Filter, Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Engineering Manager at Google",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    specialties: ["Engineering Leadership", "System Design", "Career Growth"],
    rating: 5,
    hourlyRate: 150,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Tech Lead at Microsoft",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    specialties: ["Cloud Architecture", "DevOps", "Team Management"],
    rating: 5,
    hourlyRate: 120,
  },
  {
    id: 3,
    name: "Emily Parker",
    role: "Product Director at Apple",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    specialties: ["Product Strategy", "UX", "Technical Innovation"],
    rating: 5,
    hourlyRate: 180,
  },
  // Add more mentors...
];

export default function BrowseMentors() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">Find Your Perfect Mentor</h1>
          
          {/* Search and Filter Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search mentors..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select>
                <option value="">All Specialties</option>
                <option value="engineering">Engineering</option>
                <option value="product">Product</option>
                <option value="design">Design</option>
              </Select>
              <Button className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter Results
              </Button>
            </div>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{mentor.name}</h3>
                      <p className="text-gray-600">{mentor.role}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(mentor.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 mb-2">Specializes in:</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-600">${mentor.hourlyRate}/hour</span>
                    <Button className="bg-green-600 hover:bg-green-700">
                      View Profile
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}