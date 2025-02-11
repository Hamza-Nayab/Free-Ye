import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    platform: "Twitter/X",
    reviews: [
      {
        text: "Ye has Every Right to voice his opinions and as a black man should not be criminalized 🚀",
        author: "@Mlon Eusk",
      },
      { text: "I was just mad because he ruined my gooning streak 💯",
        author: "@Savid Dchwimmer" },
    ],
  },
  {
    platform: "Discord",
    reviews: [
      {
        text: "I have always wanted to be his fav but he never liked me!",
        author: "Adin Ross #6666",
      },
      {
        text: "Ye please leave bianca, I want you",
        author: "Sydney Sweeney#1432",
      },
    ],
  },
  {
    platform: "Telegram",
    reviews: [
      {
        text: "Comrade, this is the future of free speech!",
        author: "@Pladmir Vutin",
      },
      {
        text: "China China China, Wall Wall Wall",
        author: "@Ponald J. Drump",
      },
    ],
  },
  {
    platform: "General",
    reviews: [
      {
        text: "Mein Neiga, Mein Neigbor, Mein Gəʊt",
        author: "Hdolf Aitler",
      },
      {
        text: "Matrix always gets you, but you can always get out",
        author: "Adrew Tate",
      },
    ],
  },
];

export default function CommunityReviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Community Reviews
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass h-full">
                  <CardHeader>
                    <h3 className="text-xl font-semibold gradient-text">
                      {platform.platform}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {platform.reviews.map((review, reviewIndex) => (
                        <motion.div
                          key={reviewIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: reviewIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-primary text-primary"
                              />
                            ))}
                          </div>
                          <p className="text-gray-300">{review.text}</p>
                          <p className="text-sm text-gray-400">
                            {review.author}
                          </p>
                        </motion.div>
                      ))}
                    </div>
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
