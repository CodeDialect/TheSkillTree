import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CourseGrid } from "@/components/courses/course-grid";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@shared/schema";
import { useSectionInView } from "@/hooks/use-section-invew";
import {
  Loader2,
  Sparkles,
  Book,
  Star,
  Rocket,
  Code,
  Megaphone,
  Brain,
  Video,
  Users,
  GraduationCap,
  Award,
  PlayCircle,
  CalendarIcon,
  Lightbulb,
  Paintbrush,
  Puzzle,
  Medal,
  Laptop,
  Headset,
  Circle,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  User,
  FileText,
  Calendar,
  Send,
  Mail,
  BookOpen,
  Smile,
  Home,
} from "lucide-react";
import { motion } from "framer-motion";
import CustomCarousel from "@/components/ui/carousel-custom";
import { use } from "passport";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

const course = [
  {
    id: 1,
    title: "Learn WordPress & Elementor for Beginners",
    instructor: "Robert Henry",
    students: 245,
    lessons: 25,
    rating: 4.5,
    price: "$80",
    img: "assets/images/popular/img-1.jpg",
    avatar: "assets/images/popular/avater/img-1.jpg",
  },
  {
    id: 2,
    title: "The Complete Guide to Be a Graphics Designer",
    instructor: "Jenny Wilson",
    students: 365,
    lessons: 35,
    rating: 5.0,
    price: "$200",
    img: "assets/images/popular/img-2.jpg",
    avatar: "assets/images/popular/avater/img-2.jpg",
  },
  {
    id: 3,
    title: "Learning How To Write As A Professional Author",
    instructor: "Jerome Bell",
    students: 134,
    lessons: 12,
    rating: 4.9,
    price: "$90",
    img: "assets/images/popular/img-3.jpg",
    avatar: "assets/images/popular/avater/img-3.jpg",
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const demoCategories = [
  {
    icon: <Code className="h-16 w-16 text-blue-500" />,
    title: "Coding & Development",
    description: "Learn to code with fun and interactive lessons!",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Megaphone className="h-16 w-16 text-green-500" />,
    title: "Communication Skills",
    description: "Improve public speaking and communication.",
    bgColor: "bg-green-100",
  },
  {
    icon: <Brain className="h-16 w-16 text-purple-500" />,
    title: "Critical Thinking",
    description: "Enhance problem-solving and logical reasoning.",
    bgColor: "bg-purple-100",
  },
  {
    icon: <Video className="h-16 w-16 text-pink-500" />,
    title: "Creative Arts",
    description: "Explore creativity through fun activities.",
    bgColor: "bg-pink-100",
  },
];

const steps = [
  {
    title: "Select Course",
    description:
      "Choose a course based on your child’s need, or contact us for personalized learning plans.",
    image: "",
  },
  {
    title: "Book a Free Trial",
    description:
      "Simply select your preferred day and time slot, and fill in the student details.",
    image: "",
  },
  {
    title: "Enroll for the Courses",
    description:
      "If you're satisfied with the demo class, kickstart your child’s learning journey!",
    image: "",
  },
];

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Advanced_Placement_logo_-_College_Board.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5a/SAT_logo_%282017%29.svg",
  "https://www.loganberrybooks.com/img/events/endpapers/endpapers-commoncore.jpg",
  "https://www.thoughtco.com/thmb/JYaPod3aYiBRx59z3APlwPtIWoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/International_Baccalaureate_Logo.svg-5a1c7676c7822d001a6038af.png",
  "https://static.wixstatic.com/media/d995bc_e74a2f5a48c64639beff3710d14a55dc~mv2.png/v1/fill/w_560,h_232,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20STEM_PNG.png",
  "https://upload.wikimedia.org/wikipedia/commons/e/ec/ACT_Logo.png",
];

const teachers = [
  {
    name: "Jenny Wilson",
    role: "Graphic Designer",
    img: "/assets/images/team/1.jpg",
  },
  {
    name: "Dianne Russell",
    role: "UX Designer",
    img: "/assets/images/team/2.jpg",
  },
  {
    name: "Courtney Henry",
    role: "Senior Marketer",
    img: "/assets/images/team/3.jpg",
  },
  {
    name: "Annette Black",
    role: "Web Developer",
    img: "/assets/images/team/4.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Student of UX/UI",
    image: "/assets/images/testimonial/thumb1.png",
    rating: 5,
    text: "I can't express enough gratitude for the awesome experience I had during my education journey. As a beginner, they supported me as much as possible.",
  },
  {
    id: 2,
    name: "Eleanor Pena",
    role: "Student of Graphic Design",
    image: "/assets/images/testimonial/thumb2.png",
    rating: 4,
    text: "A wonderful experience! The guidance and mentorship helped me improve my design skills significantly.",
  },
  {
    id: 3,
    name: "Annette Black",
    role: "Student of PHP",
    image: "/assets/images/testimonial/thumb3.png",
    rating: 5,
    text: "An amazing learning environment with knowledgeable instructors. Highly recommend it!",
  },
];

// Add responsive logo grid component
const LogoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(logos.length / 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden px-4 py-8">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="min-w-[50%] px-2">
            <img
              src={logo}
              alt="Supporter"
              className="h-12 w-auto object-contain mx-auto md:h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const [visibleLogos, setVisibleLogos] = useState([...logos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogos((prev) => {
        const nextBatch = prev.slice(5).concat(prev.slice(0, 5));
        return nextBatch;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-24 px-4 text-center">
        <motion.div
          className="container mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="max-w-3xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight"
              variants={item}
            >
              Fun Learning for Kids! 🎨🚀
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-600 mt-4 px-2"
              variants={item}
            >
              Interactive courses in Math, Science, Reading, and more. Let's
              explore!
            </motion.p>
            <motion.div
              className="mt-6 flex flex-col md:flex-row justify-center gap-4 px-4"
              variants={item}
            >
              <Button
                size="lg"
                asChild
                className="rounded-full text-base md:text-lg"
              >
                <Link href="/courses">
                  <Rocket className="h-5 w-5" /> Start Learning!
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full text-base md:text-lg"
              >
                <Link href="/book-demo">
                  <CalendarIcon className="h-5 w-5" /> Book Demo Class
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section className="bg-white">
        <CustomCarousel images={images} />
      </section>

      {/* New Section: Improve Your Skills */}
      <section className="py-12 md:py-16 container mx-auto px-4">
        <section className="py-16 relative flex flex-col md:flex-row items-center justify-between container mx-auto px-6">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              A Different Way to Improve Your Skills
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Learning should be fun! We provide interactive, engaging, and
              hands-on courses to help kids explore and grow their talents in
              creative and exciting ways.
            </p>
          </div>

          <div className="relative flex justify-center items-center mt-10 md:mt-0">
            <img
              src="/image1"
              alt="Fun Learning"
              className="w-80 h-auto drop-shadow-lg rounded-lg object-cover"
            />

            {/* Floating Animated Icons */}
            <motion.div
              className="absolute -top-8 -left-6 text-yellow-500"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Lightbulb className="h-12 w-12 hover:scale-110 transition-transform duration-300" />
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-12 text-blue-500"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
              <Puzzle className="h-12 w-12 hover:scale-110 transition-transform duration-300" />
            </motion.div>

            <motion.div
              className="absolute top-8 right-10 text-green-500"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            >
              <Paintbrush className="h-12 w-12 hover:scale-110 transition-transform duration-300" />
            </motion.div>
          </div>
        </section>
      </section>

      <section className="py-12 md:py-16 bg-white px-4">
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
      </section>

      {/* Course Categories */}
      <section className="py-12 md:py-16 bg-white px-4">
        <section className="py-16 bg-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-blue-700">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Find courses tailored for you
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {demoCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl shadow-md hover:shadow-lg transition ${category.bgColor}`}
                >
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-700">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
      {/* Why Choose Us Section */}
      <section className="flex flex-col md:flex-row items-center py-16 bg-yellow-100 px-6 min-h-[80vh]">
        {/* Left Side - Text & Features */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-600">Why Choose Us</h2>
          <p className="mt-4 text-gray-700 text-lg">
            Our platform offers interactive and engaging learning experiences
            with expert mentors and 24/7 support.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { icon: <GraduationCap />, title: "Experienced Mentors" },
              { icon: <Headset />, title: "Dedicated Support" },
              { icon: <Laptop />, title: "Digital Learning" },
              { icon: <Medal />, title: "Global Certification" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3 border border-yellow-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-yellow-500 p-3 rounded-full text-white">
                  {item.icon}
                </div>
                <p className="font-semibold text-yellow-700">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="md:w-1/2 flex justify-center relative">
          <motion.div
            className="relative w-72 h-72 bg-yellow-300 rounded-xl shadow-xl flex items-center justify-center overflow-hidden"
            animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/r5sw-6lJmTA?autoplay=1&mute=1"
              title="Why Choose Us Video"
              allowFullScreen
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full border-4 border-dashed border-yellow-500 rounded-xl animate-pulse"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
            Getting Started is Super Easy!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border-4 border-yellow-400"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 mb-4 rounded-full bg-blue-100 mx-auto flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-600">
                    {index + 1}
                  </span>
                </div>
                <h5 className="text-xl font-semibold text-blue-600 mb-2 text-center">
                  {step.title}
                </h5>
                <p className="text-gray-600 text-sm md:text-base text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                Caring for Both Students and Parents
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We are dedicated to your child's growth and success, while
                providing the support and flexibility parents need.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center text-gray-800">
                  <span className="text-green-500 text-xl mr-3">✔</span>{" "}
                  Convenient Bi-Monthly Payments
                </li>
                <li className="flex items-center text-gray-800">
                  <span className="text-green-500 text-xl mr-3">✔</span> Missed
                  Classes? No Charges!
                </li>
                <li className="flex items-center text-gray-800">
                  <span className="text-green-500 text-xl mr-3">✔</span>{" "}
                  Catch-Up Classes for Learning Gaps
                </li>
                <li className="flex items-center text-gray-800">
                  <span className="text-green-500 text-xl mr-3">✔</span> Regular
                  Parent-Teacher Meetings
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full text-lg"
                >
                  <Link href="/book-demo">
                    <CalendarIcon className="h-5 w-5" /> Book Demo Class
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[400px] h-[400px]"
            >
              <img
                src="https://gopalkatoch.com/ver/wp-content/uploads/2024/12/Untitled-design-4-2.png"
                alt="Learning Kids"
                className="rounded-3xl shadow-xl border-4 border-yellow-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Supporters */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-8">
            Our Key Supporters
          </h2>
          <LogoCarousel />
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-blue-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10 tracking-wide">
              Popular Courses
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Discover Your Favorite{" "}
              <span className="relative inline-block text-blue-600">
                Courses
                <i className="absolute left-0 bottom-[-5px] w-full h-2 bg-yellow-400 opacity-50"></i>
              </span>
            </h2>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {course.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all"
              >
                <div className="relative">
                  <img
                    src={course?.img}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <img
                        src={course.avatar}
                        alt={course.instructor}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-gray-700 font-medium">
                        {course.instructor}
                      </span>
                    </div>
                    <span className="text-yellow-500 text-lg font-bold">
                      ★ {course.rating}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>📖 {course.students} Students</span>
                    <span>📜 {course.lessons} Lessons</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full text-lg"
            >
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10 tracking-wide">
              Our Professionals
            </h2>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Meet our{" "}
              <span className="text-blue-600 relative">
                Teachers{" "}
                <i className="absolute left-0 bottom-[-5px] w-full h-2 bg-yellow-400 opacity-50"></i>
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 text-center"
              >
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {teacher.name}
                </h3>
                <p className="text-gray-500 text-sm">{teacher.role}</p>
                <a
                  href="#"
                  className="inline-block mt-3 text-blue-600 hover:text-blue-800 transition"
                >
                  <Linkedin size={24} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-10 tracking-wide">
              Testinominals
            </h2>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
            What Our Students{" "}
              <span className="text-blue-600 relative">
                Say{" "}
                <i className="absolute left-0 bottom-[-5px] w-full h-2 bg-yellow-400 opacity-50"></i>
              </span>
            </h2>
          </div>
          {/* Desktop Carousel */}
          <div className="hidden md:block relative overflow-hidden py-8">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {/* Double the testimonials for seamless transition */}
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-8 px-4">
                    {testimonials.map((t, j) => (
                      <motion.div
                        key={`${i}-${j}`}
                        className="bg-white p-6 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-16 h-16 rounded-full"
                          />
                          <div>
                            <h3 className="text-lg font-semibold">{t.name}</h3>
                            <p className="text-gray-500 text-sm">{t.role}</p>
                          </div>
                        </div>
                        <div className="flex gap-1 text-yellow-500 mb-3">
                          {"★".repeat(t.rating)}
                        </div>
                        <p className="text-gray-600">"{t.text}"</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            {/* Mobile - Carousel */}
            <div className="md:hidden relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-full flex-shrink-0 p-4">
                    <motion.div
                      className="bg-white p-6 rounded-2xl shadow-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex flex-col items-center gap-4 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div className="text-center">
                          <h3 className="text-lg font-semibold">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-1 text-yellow-500 mb-3">
                        {"★".repeat(testimonial.rating)}
                      </div>
                      <p className="text-gray-600 text-center">
                        "{testimonial.text}"
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Mobile Controls */}
              <div className="flex justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  className="rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap items-center py-16 bg-white relative">
        {/* Left Image Section */}
        <div className="w-full lg:w-7/12 flex justify-center lg:pl-12 px-6 mb-10 lg:mb-0 relative">
          <motion.div
            className="relative"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="https://gopalkatoch.com/ver/wp-content/uploads/2024/12/Join-Now.png"
              alt="Join Now"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-5/12 px-6">
          <motion.div
            className="ml-0 lg:ml-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              Unleash your creativity and showcase your talents!
            </h2>
            <p className="text-gray-700 mb-6">
              Every month, we host an exciting Show & Tell event where students
              from all programs can participate. Share your stories, projects,
              or skills, and stand a chance to win amazing rewards like Amazon
              vouchers or extra class credits!
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              <motion.li
                className="flex items-center text-lg"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Send className="text-blue-600 mr-3" size={24} />
                Boost Confidence
              </motion.li>
              <motion.li
                className="flex items-center text-lg"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <User className="text-blue-600 mr-3" size={24} />
                Expert Hosts
              </motion.li>
              <motion.li
                className="flex items-center text-lg"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <FileText className="text-blue-600 mr-3" size={24} />
                Get Certificate
              </motion.li>
              <motion.li
                className="flex items-center text-lg"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Calendar className="text-blue-600 mr-3" size={24} />
                Lifetime Access
              </motion.li>
            </ul>

            {/* CTA Button */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.8 }}
            >
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full text-lg"
              >
                <Link href="#">Register</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col lg:flex-row items-center justify-between">
            {/* Left Text */}
            <motion.div
              className="text-center lg:text-left mb-6 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                Subscribe to our newsletter to receive
                <span className="text-blue-600"> latest news</span> on our
                services.
              </h3>
            </motion.div>

            {/* Subscription Form */}
            <motion.form
              className="flex w-full lg:w-auto bg-gray-100 rounded-full p-2 shadow-inner"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative flex items-center w-full">
                <Mail className="absolute left-4 text-gray-500" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full lg:w-72 pl-12 pr-4 py-3 rounded-full bg-white text-gray-700 outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="ml-4 rounded-full px-6 bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Subscribe
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
      <footer className="relative bg-blue-600 text-white py-12 overflow-hidden">
        {/* Background Waves */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-20 text-white opacity-50"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,96C840,117,960,139,1080,138.7C1200,139,1320,117,1380,106.7L1440,96V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                <Smile className="mr-2 text-yellow-300" /> About Us
              </h3>
              <p className="text-sm">
                We make learning fun and interactive for kids in grades 1-8.
                Explore new subjects with engaging activities!
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                <BookOpen className="mr-2 text-green-300" /> Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-yellow-300 flex items-center"
                  >
                    <Home className="mr-2" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="hover:text-yellow-300 flex items-center"
                  >
                    <GraduationCap className="mr-2" /> Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-yellow-300 flex items-center"
                  >
                    <Smile className="mr-2" /> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-yellow-300 flex items-center"
                  >
                    <Mail className="mr-2" /> Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                <Mail className="mr-2 text-red-300" /> Contact Us
              </h3>
              <p className="text-sm">📍 123 Learning St, Kidsville</p>
              <p className="text-sm">📞 (123) 456-7890</p>
              <p className="text-sm">📧 hello@kidslms.com</p>
            </motion.div>
          </div>

          {/* Bottom Section with Bouncing Stars */}
          <div className="mt-10 flex justify-center items-center space-x-6">
            <motion.div
              className="text-yellow-300"
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Star size={24} />
            </motion.div>

            <p className="text-sm">
              &copy; 2025 Kids LMS. All rights reserved.
            </p>

            <motion.div
              className="text-yellow-300"
              initial={{ y: 0 }}
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Star size={24} />
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
