import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CourseGrid } from "@/components/courses/course-grid";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-muted py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight">
              Empower Your Future with Quality Education
            </h1>
            <p className="text-xl text-muted-foreground">
              Access world-class courses in Mathematics, Public Speaking, English
              Language Arts, and more. Learn at your own pace with expert
              instructors.
            </p>
            <Button size="lg" asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Featured Courses
            </h2>
            <Button variant="outline" asChild>
              <Link href="/courses">View All</Link>
            </Button>
          </div>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <CourseGrid courses={courses?.slice(0, 3) ?? []} />
          )}
        </div>
      </section>
    </div>
  );
}
