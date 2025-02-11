import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'X.com',
    items: [
      'Give him his account back',
      'Remove his shadow ban',
      'Free speech for all',
      'Ceo of the world'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Adidas Partnership',
    items: [
      'Get him his billions back',
      'Give him 100% ownership',
      'Ban his opps from buying yeezy',
      'Ceo of fashion'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Family Reunion',
    items: [
      'As Don Torino would say, "Family Family Family"',
      'Give him his kids back',
      'Make Kim Docile',
      'Ceo of the family'
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Roadmap
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {roadmapItems.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass h-full">
                  <CardHeader>
                    <h3 className="text-2xl font-bold gradient-text">{phase.phase}</h3>
                    <p className="text-xl text-gray-300">{phase.title}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
