import { CourseGrid } from "@/components/courses/course-grid";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@shared/schema";
import { Loader2 } from "lucide-react";

export default function CoursesPage() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  return (
    <div className="container py-16">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            Available Courses
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse our selection of high-quality courses taught by expert
            instructors. From mathematics to public speaking, we have something for
            everyone.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <CourseGrid courses={courses ?? []} />
        )}
      </div>
    </div>
  );
}
