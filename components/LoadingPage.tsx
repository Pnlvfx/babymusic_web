import { LOGO } from '@/config/config';
import Image from 'next/image';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Image className="rounded-full" priority src={LOGO} width={56} height={56} alt="LOADING_LAYOUT" />
    </div>
  );
};

export default LoadingPage;
