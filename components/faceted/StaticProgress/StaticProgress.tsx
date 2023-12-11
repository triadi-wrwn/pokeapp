'use client';

import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

const StaticProgress = (props: { value: number }) => {
  const { value } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} />;
};

export default StaticProgress;
