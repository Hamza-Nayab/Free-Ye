import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from "@/lib/utils";

const tokenomics = [
  { name: 'Public Sale', percentage: 40, color: 'bg-primary' },
  { name: 'Liquidity', percentage: 30, color: 'bg-purple-500' },
  { name: 'Team', percentage: 15, color: 'bg-blue-500' },
  { name: 'Marketing', percentage: 15, color: 'bg-pink-500' }
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Tokenomics
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {tokenomics.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <div className={cn("relative h-4 mb-2 overflow-hidden rounded-full", item.color)}>
                      <Progress value={item.percentage} className="absolute inset-0" />
                    </div>
                    <p className="text-gray-400">{item.percentage}% of total supply</p>
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