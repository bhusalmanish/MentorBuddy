"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button className={className} size="lg">
        {children}
      </Button>
    </motion.div>
  );
};

export default function Home() {
  const mentorImages = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-600 to-blue-400 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl font-bold mb-6 leading-tight"
              >
                Transform Your Career with Expert Mentorship
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl mb-8 text-white/90"
              >
                Connect with industry-leading mentors who are committed to helping you achieve your professional goals. Get personalized 1:1 guidance tailored to your journey.
              </motion.p>
              <div className="flex gap-4">
                <AnimatedButton className="bg-white text-green-600 hover:bg-gray-100 shadow-lg">
                  Find Your Mentor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </AnimatedButton>
                <AnimatedButton className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                  Become a Mentor
                  <Sparkles className="ml-2 h-5 w-5" />
                </AnimatedButton>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Mentorship"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="p-8 rounded-xl bg-gray-50 shadow-sm">
                <h3 className="text-5xl font-bold text-green-600 mb-3">2,500+</h3>
                <p className="text-gray-600 text-lg">Active Mentors</p>
              </div>
              <div className="p-8 rounded-xl bg-gray-50 shadow-sm">
                <h3 className="text-5xl font-bold text-green-600 mb-3">100,000+</h3>
                <p className="text-gray-600 text-lg">Mentorship Sessions</p>
              </div>
              <div className="p-8 rounded-xl bg-gray-50 shadow-sm">
                <h3 className="text-5xl font-bold text-green-600 mb-3">98%</h3>
                <p className="text-gray-600 text-lg">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Mentors */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Meet Our Expert Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentorImages.map((image, i) => (
                <Card key={i} className="p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <Image
                      src={image}
                      alt={`Mentor ${i + 1}`}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">
                        {["Sarah Chen", "Michael Rodriguez", "Emily Parker"][i]}
                      </h3>
                      <p className="text-gray-600">
                        {[
                          "Senior Engineering Manager at Google",
                          "Tech Lead at Microsoft",
                          "Product Director at Apple"
                        ][i]}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600">
                      {[
                        "Specializes in Engineering Leadership, System Design, and Career Growth",
                        "Expert in Cloud Architecture, DevOps, and Team Management",
                        "Focuses on Product Strategy, UX, and Technical Innovation"
                      ][i]}
                    </p>
                  </div>
                  <AnimatedButton className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                    View Profile
                  </AnimatedButton>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose MentorBuddy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-xl bg-gray-50 shadow-sm"
              >
                <Users className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">World-Class Mentors</h3>
                <p className="text-gray-600">Connect with industry leaders from top global tech companies</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-xl bg-gray-50 shadow-sm"
              >
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Tailored Guidance</h3>
                <p className="text-gray-600">Get personalized mentorship aligned with your career goals</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-xl bg-gray-50 shadow-sm"
              >
                <Star className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Proven Success</h3>
                <p className="text-gray-600">Join thousands who've accelerated their careers through our platform</p>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-400 py-20">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8 text-white/90">Join our community of ambitious professionals and dedicated mentors</p>
            <AnimatedButton className="bg-white text-green-600 hover:bg-gray-100 shadow-lg">
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}