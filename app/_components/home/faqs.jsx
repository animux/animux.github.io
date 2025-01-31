import Accordion from "@/components/ui/accordion";
import Image from "next/image";


const FAQs = () => {
  const faqs = [
    {
      title: 'How long does it take to build a website?',
      text: 'The timeline for building a website depends on its complexity, features, and design. A simple website might take 2-4 weeks, while a more complex site with custom features could take 8-12 weeks or longer.',
    },
    {
      title: 'How much does a website cost?',
      text: 'The cost of a website varies' +
        ' based on the scope of the project. A' +
        ' basic website may start at 15,000 -' +
        ' 20,000 BDT,' +
        ' while a custom, feature-rich site' +
        ' can range from 50,000 - 200,000+ BDT.'
    },
    {
      title: 'What is responsive design?',
      text: 'Responsive design ensures that your website looks and functions well on all devices, including desktops, tablets, and smartphones. This approach adjusts the layout and content based on the screen size and orientation of the device.'
    },
    {
      title: 'Will my website be SEO-friendly?',
      text: 'Yes, we design websites with search engine optimization (SEO) best practices in mind. This includes clean code, fast loading times, and proper use of tags and keywords, helping your website rank better in search engine results.'
    },
    {
      title: 'Do you offer website hosting?',
      text: 'Yes, we provide hosting services for websites we develop. Alternatively, we can work with your preferred hosting provider if you already have one.'
    },
    {
      title: 'Will I be able to update the' +
        ' website myself?',
      text: 'We offer Content Management System (CMS) integration, which allows you to easily update and manage your website\'s content without any technical knowledge. We provide training and support as needed.'
    },
    {
      title: 'What platforms do you develop on?',
      text: 'We work with various platforms depending on your needs, including WordPress, Shopify, Joomla, Drupal, and custom-built solutions using HTML, CSS, JavaScript, and more'
    },
    {
      title: 'Can you integrate e-commerce' +
        ' functionality?',
      text: 'Absolutely! We can integrate e-commerce solutions into your website, enabling you to sell products or services online with features like shopping carts, payment gateways, and inventory management.'
    },
    {
      title: 'Will you provide training on how' +
        ' to use the website?',
      text: 'Yes, we offer training sessions to help you understand how to manage your website, update content, and use any integrated features effectively.'
    }
  ]

  return (
    <div className="bg-neutral-50 dark:bg-zinc-800 py-32 text-dark dark:text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl uppercase text-center font-bold mb-20">Frequently Asked Questions (FAQs)</h1>
        <div className="flex flex-row flex-1 flex-grow gap-14 justify-between items-center">
          <div className="basis-full py-8">
            {faqs.map((faq, index) => (
              <Accordion title={faq.title} key={index} text={faq.text} />
            ))}
          </div>
          <img src="/img/faq.png" alt="faq" className="w-[500px] h-[500px]" />
        </div>
      </div>
    </div>
  )
}

export default FAQs;
