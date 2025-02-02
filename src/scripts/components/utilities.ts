import type { CSSAttribute } from 'goober';
import { useMemo, useRef } from 'react';
import { useCSS } from './styles';
import { Theme, useTheme } from './theme';

export function useClassName(props: CSSAttribute): string;
export function useClassName(
  props: (theme: Theme) => CSSAttribute,
  deps?: readonly unknown[],
): string;
export function useClassName(
  props: CSSAttribute | ((theme: Theme) => CSSAttribute),
  deps?: readonly unknown[],
): string {
  const css = useCSS();
  const theme = useTheme();
  const className = useMemo(
    () => css(typeof props === 'function' ? props(theme) : props),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [css, theme, ...(deps || [])],
  );
  return className;
}

export function usePrevious<T>(value: T): T | undefined;
export function usePrevious<T>(value: T, defaultValue: T): T;
export function usePrevious<T>(value: T, defaultValue?: T): T | undefined {
  const previousRef = useRef(defaultValue);
  const previous = previousRef.current;
  previousRef.current = value;
  return previous;
}
