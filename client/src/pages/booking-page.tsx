import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

// Demo time slots
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !selectedSlot) {
      toast({
        title: "Please select both date and time",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Demo Class Booked!",
      description: `Your demo class is scheduled for ${date.toLocaleDateString()} at ${selectedSlot}`,
    });
  };

  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Book a Demo Class</h1>
          <p className="text-muted-foreground">
            Try our interactive learning experience with a free demo class
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Select Date
              </CardTitle>
              <CardDescription>Choose your preferred date for the demo class</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date() || date > new Date().setMonth(new Date().getMonth() + 1)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Available Time Slots
              </CardTitle>
              <CardDescription>Pick a convenient time for your demo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedSlot === slot ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
              <Button
                className="w-full mt-6"
                size="lg"
                onClick={handleBooking}
                disabled={!date || !selectedSlot}
              >
                Book Demo Class
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
