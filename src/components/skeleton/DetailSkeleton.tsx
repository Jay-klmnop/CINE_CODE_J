export function DetailSkeleton() {
  return (
    <div className='flex items-center justify-center'>
      <div className='mx-5 my-4 flex max-h-screen min-h-80 w-11/12 min-w-60 flex-col gap-6 rounded-lg bg-white p-4 text-center text-xs shadow-md transition-opacity duration-300 ease-in-out lg:flex-row lg:justify-around lg:text-sm'>
        <div className='aspect-5/3 h-full w-full overflow-hidden bg-gray-300 object-cover lg:w-1/2 lg:min-w-xl'></div>
        <div className='flex h-full w-full flex-col items-center gap-6 lg:w-1/2 lg:items-start lg:justify-between'>
          <div className='flex h-24 w-full flex-col items-center justify-center gap-3 pt-4 lg:h-10 lg:flex-row lg:justify-between lg:gap-4 lg:pt-0'>
            <div className='h-10 w-5/6 bg-gray-300'></div>
            <div className='h-8 w-1/3 bg-gray-300'></div>
          </div>
          <div className='flex h-5 w-2/3 gap-4'>
            <div className='w-1/3 bg-gray-300'></div>
            <div className='w-1/3 bg-gray-300'></div>
            <div className='w-1/3 bg-gray-300'></div>
          </div>
          <div className='h-40 max-h-96 w-full bg-gray-300 lg:min-h-60'></div>
        </div>
      </div>
    </div>
  );
}
