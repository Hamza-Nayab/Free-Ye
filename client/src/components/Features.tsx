import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Lock, Zap, Globe } from "lucide-react";
import freeSpeechIcon from "./imgs/free.png"; // Import the image
import fam from "./imgs/fam.png"; // Import the image
import phone from "./imgs/phone.png"; // Import the image
import serious from "./imgs/serious.png"; // Import the image

const features = [
  {
    icon: freeSpeechIcon,
    title: "Free Speech",
    description:
      "Everyone has the right to express their opinions without censorship",
  },
  {
    icon: phone,
    title: "Security",
    description:
      "No ones Security should be compromised for the sake of free speech",
  },
  {
    icon: fam,
    title: "Family",
    description: "No one's family should be threatened or stolen for their opinions",
  },
  {
    icon: serious,
    title: "Legacy",
    description: "A person's legacy should not be tarnished for their opinions",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass h-full">
                  <CardHeader>
                    {typeof feature.icon === "string" ? (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="h-12 w-12 mb-4"
                      />
                    ) : (
                      <feature.icon className="h-8 w-8 text-primary mb-4" />
                    )}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
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
