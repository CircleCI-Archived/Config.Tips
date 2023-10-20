---
kind: nextjs
title: Optimize code splitting with Webpack
description: You can customize the Webpack configuration in Next.js to optimize your bundle size or making other advanced adjustments.
contributor: https://github.com/rsylvian
snippet: |
  module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.optimization.splitChunks = {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all',
            },
          },
        };
      }

      // Add other customizations here...

      return config;
    },
  };
---

You can customize the Webpack configuration in Next.js to suit your project's specific needs. This can be particularly useful for things like optimizing your bundle size, adding loaders for different file types, or making other advanced adjustments.

In this example, we're using the webpack property to modify the Webpack configuration and enable `SplitChunksPlugin` to optimize code splitting.
