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

export function CourseCard({ course }: { course: Course }) {
  const { addToCart } = useCart();

  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={course.imageUrl}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="line-clamp-2 mb-2">{course.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {course.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-semibold">
            ${Number(course.price).toFixed(2)}
          </span>
          <Button onClick={() => addToCart(course)}>Add to Cart</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
