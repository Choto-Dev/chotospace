import { cn } from "@chotospace/ui/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-accent", className)}
      data-slot="skeleton"
      {...props}
    />
  );
}

export { Skeleton };
