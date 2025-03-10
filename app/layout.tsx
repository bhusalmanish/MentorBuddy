import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MentorBuddy - Transform Your Career with Expert Mentorship',
  description: 'Connect with experienced mentors who can guide you through your tech career journey.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl text-green-600">MentorBuddy</Link>
            <div className="flex gap-6">
              <Link href="/browse-mentors" className="text-gray-600 hover:text-green-600 transition-colors">Browse Mentors</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-green-600 transition-colors">Pricing</Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</Link>
              <Link href="/login" className="text-gray-600 hover:text-green-600 transition-colors">Login</Link>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <h3 className="font-bold text-2xl mb-6">MentorBuddy</h3>
                <p className="text-gray-400">Empowering careers through expert mentorship and guidance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">For Mentees</h4>
                <ul className="space-y-3">
                  <li><Link href="/browse-mentors" className="text-gray-400 hover:text-white transition-colors">Browse Mentors</Link></li>
                  <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">For Mentors</h4>
                <ul className="space-y-3">
                  <li><Link href="/become-mentor" className="text-gray-400 hover:text-white transition-colors">Become a Mentor</Link></li>
                  <li><Link href="/success-stories" className="text-gray-400 hover:text-white transition-colors">Success Stories</Link></li>
                  <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Get in Touch</Link></li>
                  <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 MentorBuddy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}