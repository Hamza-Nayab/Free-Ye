import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is FREE-YE?',
    answer: 'FREE-YE is a community-driven cryptocurrency focused on promoting and protecting freedom of speech for everyone.'
  },
  {
    question: 'How can I buy FREE-YE?',
    answer: 'Through the button on top or through Address:'
  },
  {
    question: 'When Will Ye finally drop Donda?',
    answer: 'when this coin hits 100 Mil market cap.'
  },
  {
    question: 'What makes FREE-YE unique?',
    answer: 'FREE-YE combines meme culture with a serious mission to protect digital rights and freedom of expression.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="glass mb-4">
                  <AccordionTrigger className="text-lg px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 px-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
