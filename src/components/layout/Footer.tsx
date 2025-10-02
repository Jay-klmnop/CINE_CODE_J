import { RiMovie2Fill } from 'react-icons/ri';

const SOCIAL_LINKS = [
  { href: 'https://www.twitter.com/', label: 'twitter' },
  { href: 'https://www.facebook.com/', label: 'facebook' },
  { href: 'https://www.tiktok.com/', label: 'tiktok' },
  { href: 'https://www.instagram.com/', label: 'instagram' },
];

export default function Footer() {
  return (
    <div className='footer z-50 flex w-full flex-col items-start gap-2 px-4 py-4 text-xs font-semibold'>
      <div className='flex flex-col items-start'>
        <div className='flex justify-center'>
          <h1 className='text-lg font-black'>FliQ</h1>
          <RiMovie2Fill />
        </div>
        <p className='text-left text-xs'>
          Every film has a story. Every opinion matters. Welcome to FliQ.
        </p>
      </div>
      <div className='flex w-full flex-row gap-4'></div>
      <div className='flex flex-row items-center justify-center gap-4'>
        {SOCIAL_LINKS.map(({ href, label }) => (
          <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
            {label}
          </a>
        ))}
      </div>
      <span className='sub-text'>Copyright © 2025. All rights reserved.</span>
    </div>
  );
}
