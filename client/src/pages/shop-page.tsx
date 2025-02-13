import { ProductCard, type Product } from "@/components/shop/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Demo products data
const demoProducts: Product[] = [
  {
    id: 1,
    name: "Digital Study Planner",
    description: "Stay organized with our comprehensive digital study planner",
    price: 19.99,
    imageUrl: "https://placehold.co/600x400?text=Study+Planner",
    category: "Digital Tools",
  },
  {
    id: 2,
    name: "Mathematics Workbook",
    description: "Practice problems and solutions for advanced mathematics",
    price: 29.99,
    imageUrl: "https://placehold.co/600x400?text=Math+Workbook",
    category: "Books",
  },
  {
    id: 3,
    name: "Science Lab Kit",
    description: "Hands-on experiments for young scientists",
    price: 49.99,
    imageUrl: "https://placehold.co/600x400?text=Lab+Kit",
    category: "Equipment",
  },
  {
    id: 4,
    name: "Language Learning Cards",
    description: "Flashcards for effective language learning",
    price: 14.99,
    imageUrl: "https://placehold.co/600x400?text=Learning+Cards",
    category: "Learning Materials",
  },
  {
    id: 5,
    name: "Art Supply Kit",
    description: "Complete set of art supplies for creative expression",
    price: 39.99,
    imageUrl: "https://placehold.co/600x400?text=Art+Kit",
    category: "Equipment",
  },
  {
    id: 6,
    name: "Coding Practice Guide",
    description: "Step-by-step guide for learning programming",
    price: 24.99,
    imageUrl: "https://placehold.co/600x400?text=Coding+Guide",
    category: "Books",
  },
];

const categories = ["All", "Books", "Digital Tools", "Equipment", "Learning Materials"];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = demoProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">Educational Resources</h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse our collection of high-quality educational materials, from books and digital tools
            to learning equipment and supplies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
