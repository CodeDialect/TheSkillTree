import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CourseGrid } from "@/components/courses/course-grid";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@shared/schema";
import { Loader2, Sparkles, Book, Star, Rocket, Code, Megaphone, Brain, Video, Users, GraduationCap, Award, PlayCircle } from "lucide-react";
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

const demoCategories = [
  {
    icon: <Code className="h-12 w-12" />,
    title: "Development",
    description: "Learn programming and web development",
    color: "text-blue-500",
  },
  {
    icon: <Megaphone className="h-12 w-12" />,
    title: "Digital Marketing",
    description: "Master online marketing strategies",
    color: "text-green-500",
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Self Improvement",
    description: "Enhance your personal skills",
    color: "text-purple-500",
  },
  {
    icon: <Video className="h-12 w-12" />,
    title: "Video Editing",
    description: "Create amazing video content",
    color: "text-pink-500",
  },
];

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
          
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="container relative">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              variants={item}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-blue-100">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">1250+</h3>
              <p className="text-muted-foreground">Total Courses</p>
            </motion.div>

            <motion.div 
              variants={item}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-green-100">
                <PlayCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Free Classes</p>
            </motion.div>

            <motion.div 
              variants={item}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-purple-100">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">25k+</h3>
              <p className="text-muted-foreground">Active Students</p>
            </motion.div>

            <motion.div 
              variants={item}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-yellow-100">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">250+</h3>
              <p className="text-muted-foreground">Expert Mentors</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute left-0 top-0 -translate-x-1/2 translate-y-1/2">
          <div className="w-24 h-24 rounded-full bg-blue-100 opacity-20 animate-blob" />
        </div>
        <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2">
          <div className="w-24 h-24 rounded-full bg-purple-100 opacity-20 animate-blob animation-delay-2000" />
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="container relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Explore <span className="text-primary">Courses</span> By Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect course that matches your interests and goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`mb-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
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