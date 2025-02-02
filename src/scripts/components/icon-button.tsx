import React from 'react';
import { DISABLED_OPACITY } from './constants';
import { FocusCircle, applyClassName } from './helpers';
import { TemplateIcon } from './icon';
import { useTheme } from './theme';
import { useClassName } from './utilities';

export type IconButtonProps = JSX.IntrinsicElements['button'] & {
  iconURL: string;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { iconURL, ...props },
  ref,
) {
  const theme = useTheme();
  const wrapperClassName = useClassName({
    position: 'relative',
  });
  const buttonClassName = useClassName({
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    height: '36px',
    padding: '6px',
    width: '36px',
    '&:disabled': {
      cursor: 'default',
      opacity: DISABLED_OPACITY,
    },
    '&:focus': {
      outline: 'none',
    },
  });
  return (
    <div className={wrapperClassName}>
      <button {...applyClassName(props, buttonClassName)} ref={ref}>
        <TemplateIcon color={theme.iconButton} iconSize="24px" url={iconURL} />
      </button>
      <FocusCircle />
    </div>
  );
});
