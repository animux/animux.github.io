"use client";

import React from "react";
import Image from "next/image";
import { FileText, Database, CreditCard } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: FileText,
      title: "Reports & Insights",
      description:
        "Generate detailed reports and gain actionable insights from your data",
      image: "/erp/3w.png",
      imageDark: "/erp/3d.png",
      alt: "Reports and analytics dashboard",
    },
    {
      icon: Database,
      title: "Database Backup & Security",
      description:
        "Keep your data safe with automated backups and enterprise-grade security",
      image: "/erp/4w.png",
      imageDark: "/erp/4d.png",
      alt: "Database backup and security features",
    },
    {
      icon: CreditCard,
      title: "Finance & Banking",
      description:
        "Manage finances, invoicing, and banking integrations all in one place",
      image: "/erp/5w.png",
      imageDark: "/erp/5d.png",
      alt: "Finance and banking management",
    },
  ];

  return (
    <section className="relative py-10 md:py-10 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 md:mb-6">
            Built for Modern Businesses
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our ERP application is designed for companies that want better
            control over their operations without the complexity of outdated
            enterprise systems. Whether you&apos;re managing inventory, sales,
            finance, or internal workflows, our platform gives you the tools to
            run your business with confidence.
          </p>
        </div>

        {/* Features with Images */}
        <div className="space-y-12 md:space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Text Content */}
                <div className={`space-y-6 ${!isEven && "md:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-100 dark:from-emerald-500/20 dark:to-emerald-500/20">
                      <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature highlights */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                      Key capabilities:
                    </p>
                    <ul className="space-y-2">
                      {index === 0 && (
                        <>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Real-time analytics and dashboards
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Customizable reports
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Data export capabilities
                          </li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Automated daily backups
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Multi-layer encryption
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            99.9% uptime guarantee
                          </li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Invoice management
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Multi-currency support
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Bank reconciliation
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative rounded-2xl overflow-hidden ${!isEven && "md:order-1"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent via-transp z-10"></div>
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-auto dark:hidden rounded-xl object-cover"
                  />
                  <img
                    src={feature.imageDark}
                    alt={feature.alt}
                    className="w-full h-auto hidden dark:block rounded-xl object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
