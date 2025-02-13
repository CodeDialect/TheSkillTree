import { formatCurrency } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-2 border-primary/10">
        <CardHeader className="p-0">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-cover transition-transform hover:scale-110 duration-300"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col gap-2">
            <CardTitle className="line-clamp-1">{product.name}</CardTitle>
            <CardDescription className="line-clamp-2">
              {product.description}
            </CardDescription>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex w-full items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {formatCurrency(product.price)}
            </span>
            <Button size="sm" className="rounded-full">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
