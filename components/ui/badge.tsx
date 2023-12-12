import capitalize from '@/lib/capitalize';
import { cn } from '@/lib/utils';

const Badge = ({
  variant,
  className,
}: {
  variant: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'font-bold text-white inline-block text-center mx-2 border rounded-xl py-1 px-3 shadow-md',
        variant,
        className
      )}
    >
      {capitalize(variant)}
    </div>
  );
};

export default Badge;
