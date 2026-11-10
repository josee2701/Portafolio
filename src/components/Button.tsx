import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: string;
  className?: string;
  children: ReactNode;
}

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string; disabled?: boolean };
type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

type ButtonProps = AnchorProps | NativeButtonProps;

const base =
  'inline-flex items-center justify-center gap-2 rounded-chip font-semibold transition-all duration-200 active:opacity-90 ' +
  'disabled:opacity-60 disabled:cursor-not-allowed aria-disabled:opacity-60 aria-disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary: 'bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:shadow-glow',
  secondary:
    'border border-gray-300 dark:border-white/20 text-gray-800 dark:text-gray-100 hover:border-accent hover:text-accent-strong',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-6 py-3.5',
};

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', fullWidth = false, loading = false, loadingText, className, children, ...rest } = props;
  const classes = [base, variants[variant], sizes[size], fullWidth && 'w-full', className].filter(Boolean).join(' ');
  const content = loading && loadingText ? loadingText : children;

  if (rest.href !== undefined) {
    const { disabled, rel, target, onClick, tabIndex, ...anchorRest } = rest;
    const inactive = disabled || loading;
    return (
      <a
        {...anchorRest}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-disabled={inactive || undefined}
        aria-busy={loading || undefined}
        tabIndex={inactive ? -1 : tabIndex}
        onClick={inactive ? (e) => e.preventDefault() : onClick}
        className={classes}
      >
        {content}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- href (undefined) no debe llegar al DOM
  const { href: _href, type = 'button', disabled, ...buttonRest } = rest;
  return (
    <button {...buttonRest} type={type} disabled={disabled || loading} aria-busy={loading || undefined} className={classes}>
      {content}
    </button>
  );
}
