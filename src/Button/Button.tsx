import { Typography } from '../Typography/Typography';
import styles from './Button.module.css';
import { type ReactNode } from 'react';
type Props = {
  fullWidth?: boolean;
  /**
   * Prop to choose which button from MD3 to use
   * @example
   * <Button variant="outlined">Click me!</Button>
   */
  variant?: 'outlined' | 'filled' | 'text';
  children?: ReactNode;
};
const colorType = {
  outlined: 'primary',
  text: 'primary',
  filled: 'onPrimary',
} as const;
/**
 * Button component, implementing **Material Design 3** buttons. Use prop `variant` to choose which button
 * from material design spec to use
 * @see https://m3.material.io/components/buttons/overview
 */
export const Button = (props: Props) => {
  const { children, fullWidth, variant = 'text' } = props;
  const fullWidthStyle = fullWidth ? styles.fullWidth : '';
  const outlinedStyle = variant === 'outlined' ? styles.outlinedButton : '';
  const mainColorsStyle = variant === 'filled' ? '' : styles.mainColors;
  const filledStyle = variant === 'filled' ? styles.filledButton : '';
  const colorStyle = colorType[variant];
  return (
    <button
      className={
        styles.buttonCommon +
        ' ' +
        mainColorsStyle +
        ' ' +
        fullWidthStyle +
        ' ' +
        filledStyle +
        ' ' +
        outlinedStyle
      }
    >
      <Typography color={colorStyle} variant="labelLarge">
        {children}
      </Typography>
    </button>
  );
};
