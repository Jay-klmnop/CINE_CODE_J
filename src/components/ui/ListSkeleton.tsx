import { CardSkeleton } from '@/components/ui/CardSkeleton';

export function ListSkeleton({ count = 14 }: { count?: number }) {
  return (
    <div className='mx-4 my-4 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
