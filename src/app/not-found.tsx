'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-4">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <Link 
              href="/"
              className="btn btn-primary"
              tabIndex={0}
              aria-label="Go back to home page"
            >
              Go back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 