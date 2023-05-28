import styles from './Button.module.css';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box';
import { type ReactNode } from 'react';
import { colors } from '../utils/color';

type Props = {
  fullWidth?: boolean;
  /**
   * Prop to choose which button from MD3 to use
   * @example
   * <Button variant="outlined">Click me!</Button>
   */
  variant?: 'outlined' | 'filled' | 'text';
  /**
   * Prop to add an icon from MD3
   * @example
   * <Button startIcon={<Icon icon="search"/>}>Click me!</Button>
   */
  startIcon?: ReactNode;
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
  const { children, fullWidth, variant = 'text', startIcon } = props;
  const fullWidthStyle = fullWidth ? styles.fullWidth : '';
  const outlinedStyle = variant === 'outlined' ? styles.outlinedButton : '';
  const mainColorsStyle = variant === 'filled' ? '' : styles.mainColors;
  const filledStyle = variant === 'filled' ? styles.filledButton : '';
  const colorStyle = colorType[variant];
  const paddingLeft = startIcon ? 2 : 3;
  const marginRight = startIcon ? 1 : 0;
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
      <Box pr={3} pl={paddingLeft}>
        <Box direction="row" justifyContent="start" alignItems="center">
          <Box direction="row" justifyContent="start" alignItems="center" mr={marginRight}>
            <div className={colors[colorStyle]}>{startIcon}</div>
          </Box>
          <Typography color={colorStyle} variant="labelLarge">
            {children}
          </Typography>
        </Box>
      </Box>
    </button>
  );
};
