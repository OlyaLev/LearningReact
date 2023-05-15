import styles from './Button.module.css';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box';
import { type ReactNode } from 'react';

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

const paddingType = {
  iconPadding: '16px',
  noIconPadding: '24px',
} as const;

const marginType = {
  iconMargin: '8px',
  noIconMargin: '0px',
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
  const paddingLeft = startIcon ? paddingType.iconPadding : paddingType.noIconPadding;
  const marginRight = startIcon ? marginType.iconMargin : marginType.noIconMargin;
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
      <Box py="10px" pr="24px" pl={paddingLeft}>
        <Typography color={colorStyle} variant="labelLarge">
          <Box>
            <Box mr={marginRight}>{startIcon}</Box>
            {children}
          </Box>
        </Typography>
      </Box>
    </button>
  );
};
