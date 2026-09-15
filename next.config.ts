import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/uyhby16u/**" },
    ],
  },
  async rewrites() {
    return [
      // internal tool, unguessable slug — not linked from the site, kept off /public nav on purpose
      { source: "/invoices-8259a77f", destination: "/invoices-8259a77f/index.html" },
    ];
  },
};

export default nextConfig;
