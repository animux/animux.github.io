import Accordion from "@/components/ui/accordion";
import Image from "next/image";

import { TypewriterEffect } from "@/components/Typewriter";

const FAQs = () => {
  const faqs = [
    {
      title: "How long does it take to build a website?",
      text: "The timeline for building a website depends on its complexity, features, and design. A simple website might take 2-4 weeks, while a more complex site with custom features could take 8-12 weeks or longer.",
    },
    {
      title: "How much does a website cost?",
      text:
        "The cost of a website varies" +
        " based on the scope of the project. A" +
        " basic website may start at 15,000 -" +
        " 20,000 BDT," +
        " while a custom, feature-rich site" +
        " can range from 50,000 - 200,000+ BDT.",
    },
    {
      title: "What is responsive design?",
      text: "Responsive design ensures that your website looks and functions well on all devices, including desktops, tablets, and smartphones. This approach adjusts the layout and content based on the screen size and orientation of the device.",
    },
    {
      title: "Will my website be SEO-friendly?",
      text: "Yes, I design websites with search engine optimization (SEO) best practices in mind. This includes clean code, fast loading times, and proper use of tags and keywords, helping your website rank better in search engine results.",
    },
    {
      title: "Do you offer website hosting?",
      text: "Yes, I provide hosting services for websites we develop. Alternatively, we can work with your preferred hosting provider if you already have one.",
    },
    {
      title: "Will I be able to update the" + " website myself?",
      text: "I offer Content Management System (CMS) integration, which allows you to easily update and manage your website's content without any technical knowledge. I will provide training and support as needed.",
    },
    {
      title: "What platforms do you develop on?",
      text: "I work with various platforms depending on your needs, including WordPress, Shopify, Joomla, Drupal, and custom-built solutions using HTML, CSS, JavaScript, and more",
    },
    {
      title: "Can you integrate e-commerce" + " functionality?",
      text: "Absolutely! I can integrate e-commerce solutions into your website, enabling you to sell products or services online with features like shopping carts, payment gateways, and inventory management.",
    },
    {
      title: "Will you provide training on how" + " to use the website?",
      text: "Yes, I offer training sessions to help you understand how to manage your website, update content, and use any integrated features effectively.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-neutral-50 dark:bg-zinc-900 py-20 text-dark dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -top-80 left-1/3 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_20%_25%,rgba(16,185,129,0.18)_0%,transparent_60%),radial-gradient(circle_at_78%_22%,rgba(56,189,248,0.13)_0%,transparent_58%),radial-gradient(circle_at_52%_72%,rgba(168,85,247,0.10)_0%,transparent_65%)] blur-[180px] dark:bg-[radial-gradient(circle_at_35%_30%,rgba(24,24,27,0.10)_0%,rgba(24,24,27,0.08)_40%,rgba(24,24,27,0.04)_70%,transparent_90%)] dark:opacity-60" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.18)_0%,rgba(255,255,255,0)_72%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(192,132,252,0.24)_0%,rgba(2,6,23,0)_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-white/75 via-white/30 to-transparent dark:from-zinc-950/65 dark:via-zinc-950/25" />
      <div className="relative z-10 px-5">
        <TypewriterEffect
          text={"Got Questions?\nGot Answers."}
          className="text-4xl sm:text-5xl md:text-8xl text-left md:text-right uppercase font-bold mb-10 md:mb-20 whitespace-pre-line"
        />
        <div className="flex flex-row flex-1 flex-grow px-0 sm:px-4 md:px-8 gap-6 md:gap-14 justify-between items-center">
          <div className="basis-full">
            {faqs.map((faq, index) => (
              <Accordion title={faq.title} key={index} text={faq.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
