import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <>
      <h1>Loading note..</h1>
      <Skeleton className="w-60 h-60" />
    </>
  );
}
