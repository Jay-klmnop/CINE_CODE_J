export function DetailSkeleton() {
  return (
    <div className='centralize'>
      <div className='mx-5 my-4 flex max-h-screen min-h-80 w-11/12 min-w-60 flex-col gap-6 rounded-lg bg-white p-4 text-center text-xs shadow-md transition-opacity duration-300 ease-in-out sm:flex-row sm:justify-around sm:text-sm'>
        <div className='aspect-5/3 h-full w-full overflow-hidden bg-gray-300 object-cover sm:w-1/2 sm:min-w-xl'></div>
        <div className='flex h-full w-full flex-col items-center gap-6 sm:w-1/2 sm:items-start sm:justify-between'>
          <div className='centralize h-24 w-full flex-col gap-3 pt-4 sm:h-10 sm:flex-row sm:justify-between sm:gap-4 sm:pt-0'>
            <div className='h-10 w-5/6 bg-gray-300'></div>
            <div className='h-8 w-1/3 bg-gray-300'></div>
          </div>
          <div className='flex h-5 w-2/3 gap-4'>
            <div className='w-1/3 bg-gray-300'></div>
            <div className='w-1/3 bg-gray-300'></div>
            <div className='w-1/3 bg-gray-300'></div>
          </div>
          <div className='h-40 max-h-96 w-full bg-gray-300 sm:min-h-60'></div>
        </div>
      </div>
    </div>
  );
}
