export function CardSkeleton() {
  return (
    <div>
      <div className='flex aspect-7/10 max-h-[500px] min-h-80 min-w-60 animate-pulse flex-col items-center gap-2 rounded-lg bg-white p-4 text-xs shadow-md transition-opacity duration-300 ease-in-out'>
        <div className='relative aspect-4/5 w-full overflow-hidden rounded-lg bg-gray-300'></div>
        <div className='flex h-14 w-full flex-col gap-2'>
          <div className='h-6 w-full rounded-lg bg-gray-300'></div>
          <div className='h-6 w-2/3 rounded-lg bg-gray-300'></div>
        </div>
        <div className='flex w-full justify-end'>
          <div className='h-6 w-1/4 rounded-lg bg-gray-300'></div>
        </div>
      </div>
    </div>
  );
}
