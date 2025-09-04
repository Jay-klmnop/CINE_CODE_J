export default function NavBar() {
  return (
    <div className='flex h-16 w-full items-center justify-between bg-gray-400 px-5 py-2 whitespace-nowrap'>
      <h1 className='leading-none'>OZ무비</h1>
      <input type='text' className='min-w- mx-4 flex h-8 flex-1 rounded bg-white' />
      <div className='flex items-center justify-center gap-2 text-center text-xs'>
        <button className='h-7 w-12 rounded border bg-gray-100 leading-none'>login</button>
        <button className='h-7 w-12 rounded border bg-gray-100 leading-none'>signup</button>
      </div>
    </div>
  );
}
