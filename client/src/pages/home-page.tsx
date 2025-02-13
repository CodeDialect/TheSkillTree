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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
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
          <div className="student-pic mt-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
              <div className="absolute -bottom-4 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"/>
              <motion.div 
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Star className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">25k+</h3>
                      <p className="text-muted-foreground">Active Students</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-white py-16">
        <motion.div 
          className="container flex flex-col gap-8"
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

      {/* Features Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <motion.div 
          className="container grid md:grid-cols-3 gap-8 text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            variants={item}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl flex flex-col items-center gap-4"
          >
            <Star className="h-12 w-12 text-yellow-400" />
            <h3 className="text-xl font-bold text-primary">Fun Learning</h3>
            <p className="text-muted-foreground">Learn through games and interactive lessons!</p>
          </motion.div>

          <motion.div 
            variants={item}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl flex flex-col items-center gap-4"
          >
            <Book className="h-12 w-12 text-green-400" />
            <h3 className="text-xl font-bold text-primary">Expert Teachers</h3>
            <p className="text-muted-foreground">Learn from friendly and caring teachers!</p>
          </motion.div>

          <motion.div 
            variants={item}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl flex flex-col items-center gap-4"
          >
            <Rocket className="h-12 w-12 text-purple-400" />
            <h3 className="text-xl font-bold text-primary">Achieve Goals</h3>
            <p className="text-muted-foreground">Watch yourself grow and succeed!</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}