import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;

