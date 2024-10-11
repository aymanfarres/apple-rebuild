import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b pt-2  border-white">
      <div
        className="flex justify-between items-center py-5  cursor-pointer" // Reduced padding
        onClick={onToggle}
      >
        <h2 className="text-lg text-white text-center">{title}</h2> {/* Centered text */}
        <span className="text-white">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 text-white">{children}</div>
      )}
    </div>
  );
};

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <AccordionItem
        title="What is Apple TV+?"
        isOpen={openIndex === 0}
        onToggle={() => toggleAccordion(0)}
      >
        Apple TV+ is a subscription-based streaming service that offers original content, including movies, documentaries, and TV shows produced by Apple.
      </AccordionItem>
      <AccordionItem
        title="How can I watch Apple TV+?"
        isOpen={openIndex === 1}
        onToggle={() => toggleAccordion(1)}
      >
        You can watch Apple TV+ on various devices, including Apple TV, iPhone, iPad, Mac, and compatible smart TVs. You can also stream it on the Apple TV app on supported platforms.
      </AccordionItem>
      <AccordionItem
        title="What types of content are available on Apple TV+?"
        isOpen={openIndex === 2}
        onToggle={() => toggleAccordion(2)}
      >
        Apple TV+ features a wide range of original content, including dramas, comedies, documentaries, and children's programming. New shows and movies are added regularly.
      </AccordionItem>
      <AccordionItem
        title="Is there a free trial available for Apple TV+?"
        isOpen={openIndex === 3}
        onToggle={() => toggleAccordion(3)}
      >
        Yes, Apple offers a free trial for new subscribers. You can enjoy a free trial period to explore the content before committing to a subscription.
      </AccordionItem>
      <AccordionItem
        title="Can I share my Apple TV+ subscription with family?"
        isOpen={openIndex === 4}
        onToggle={() => toggleAccordion(4)}
      >
        Yes, Apple TV+ supports Family Sharing, allowing you to share your subscription with up to five family members.
      </AccordionItem>
    </div>
  );
};

export default Accordion;
