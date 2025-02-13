import { Course } from "@shared/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CourseCard({ course }: { course: Course }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="flex flex-col overflow-hidden border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-0">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="h-full w-full object-cover transform transition-transform hover:scale-110 duration-300"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6 bg-gradient-to-b from-white to-blue-50/30">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <CardTitle className="line-clamp-2 text-xl font-bold">
              {course.title}
            </CardTitle>
          </div>
          <CardDescription className="line-clamp-3 text-base">
            {course.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 pt-0 bg-gradient-to-b from-blue-50/30 to-blue-50/10">
          <div className="flex w-full items-center justify-between">
            <span className="text-lg font-bold text-primary">
              ${Number(course.price).toFixed(2)}
            </span>
            <Button 
              onClick={() => addToCart(course)}
              className="rounded-full font-bold"
            >
              Add to Cart ✨
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}