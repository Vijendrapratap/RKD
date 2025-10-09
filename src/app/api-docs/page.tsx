"use client";

import { useEffect } from "react";

export default function ApiDocsPage() {
  useEffect(() => {
    // Load Swagger UI CSS and JS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js";
    script.onload = () => {
      // @ts-ignore
      window.SwaggerUIBundle({
        url: "/api/swagger",
        dom_id: "#swagger-ui",
        deepLinking: true,
        presets: [
          // @ts-ignore
          window.SwaggerUIBundle.presets.apis,
          // @ts-ignore
          window.SwaggerUIBundle.SwaggerUIStandalonePreset
        ],
        layout: "BaseLayout"
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">RKD API Documentation</h1>
          <p className="text-gray-300">Complete API reference for RKD - Repair ki Dukaan platform</p>
        </div>
      </div>
      <div id="swagger-ui" className="max-w-7xl mx-auto"></div>
    </div>
  );
}
