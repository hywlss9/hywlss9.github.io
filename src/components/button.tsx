import type { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export default function Button(props: ButtonProps) {
  const { className, children } = props;
  return (
    <button {...props} className={classNames('px-3 py-2 border rounded border-black dark:border-white', className)}>
      {children}
    </button>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
