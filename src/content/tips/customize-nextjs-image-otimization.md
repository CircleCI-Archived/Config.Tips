---
kind: nextjs
title: Customize Image Optimization
description: Use the image attribute to customize how Next.js should optimize images that are used by the next/image component.
contributor: https://github.com/rsylvian
snippet: |
  module.exports = {
    images: {
      formats: ["image/webp", "image/jpeg"], // Specify the image formats to be generated
      domains: ["example.com", "cdn.example.com"], // Allowlisted domains for image optimization
      deviceSizes: [320, 640, 960, 1280], // Specify responsive image sizes
      imageSizes: [16, 32, 48, 64], // Specify image sizes for different layouts
      loader: "default", // Choose between "default" and "imgix" loaders
      minimumCacheTTL: 60, // Set the minimum cache time for optimized images (in seconds)
      // Add other image optimization settings here as needed
    },
  };
---

Next.js provides built-in support for optimizing images using the next/image component. You can customize the image optimization behavior in your next.config.js file to control image quality, formats, and other settings.

By optimizing your images, you can improve page load times and user experience. Adjusting these settings can help you strike the right balance between image quality and performance, depending on your project's requirements.
