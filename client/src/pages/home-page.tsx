import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CourseGrid } from "@/components/courses/course-grid";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@shared/schema";
import { Loader2, Sparkles, Book, Star, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-gradient-to-b from-primary/10 to-background py-24">
        <motion.div 
          className="container"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
            <motion.div variants={item}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Let's Learn & Have Fun! 🎨
              </h1>
            </motion.div>
            <motion.div variants={item}>
              <p className="text-xl text-muted-foreground">
                Join our exciting learning adventure with fun courses in Math, 
                Public Speaking, Reading, and more! Start your journey today! ✨
              </p>
            </motion.div>
            <motion.div variants={item}>
              <Button size="lg" asChild className="rounded-full text-lg gap-2">
                <Link href="/courses">
                  <Rocket className="h-5 w-5" />
                  Start Learning!
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="container">
        <motion.div 
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-yellow-400" />
              <h2 className="text-2xl font-bold tracking-tight text-primary">
                Popular Courses
              </h2>
            </div>
            <Button variant="outline" asChild className="rounded-full">
              <Link href="/courses">See All Courses</Link>
            </Button>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <CourseGrid courses={courses?.slice(0, 3) ?? []} />
          )}
        </motion.div>
      </section>

      <section className="container">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            variants={item}
            className="p-6 rounded-2xl bg-primary/5 flex flex-col items-center gap-4"
          >
            <Star className="h-12 w-12 text-yellow-400" />
            <h3 className="text-xl font-bold">Fun Learning</h3>
            <p>Learn through games and interactive lessons!</p>
          </motion.div>

          <motion.div 
            variants={item}
            className="p-6 rounded-2xl bg-primary/5 flex flex-col items-center gap-4"
          >
            <Book className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Expert Teachers</h3>
            <p>Learn from friendly and caring teachers!</p>
          </motion.div>

          <motion.div 
            variants={item}
            className="p-6 rounded-2xl bg-primary/5 flex flex-col items-center gap-4"
          >
            <Rocket className="h-12 w-12 text-blue-400" />
            <h3 className="text-xl font-bold">Achieve Goals</h3>
            <p>Watch yourself grow and succeed!</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}