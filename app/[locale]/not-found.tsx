import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4 p-6">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-muted-foreground">This page could not be found.</p>
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}
