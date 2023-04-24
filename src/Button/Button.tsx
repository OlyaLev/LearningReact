import { Typography } from '../Typography/Typography';
import styles from './Button.module.css';
import { type ReactNode } from 'react';
type Props = {
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'text';
  children?: ReactNode;
};
export const Button = (props: Props) => {
  const { children, fullWidth, variant } = props;
  const fullWidthStyle = fullWidth ? styles.fullWidth : '';
  const outlinedStyle = variant === 'outlined' ? styles.outlinedButton : '';
  const mainColorsStyle = variant === 'filled' ? '' : styles.mainColors;
  const filledStyle = variant === 'filled' ? styles.filledButton : '';
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
      <Typography variant="labelLarge">{children}</Typography>
    </button>
  );
};
