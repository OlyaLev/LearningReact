import styles from './Typography.module.css';
import { type ReactNode } from 'react';
import { colors, type Color } from '../utils/color';

const variants = {
  displayLarge: styles.displayLarge,
  displayMedium: styles.displayMedium,
  displaySmall: styles.displaySmall,
  headlineLarge: styles.headlineLarge,
  headlineMedium: styles.headlineMedium,
  headlineSmall: styles.headlineSmall,
  labelLarge: styles.labelLarge,
  labelMedium: styles.labelMedium,
  labelSmall: styles.labelSmall,
  titleLarge: styles.titleLarge,
  titleMedium: styles.titleMedium,
  titleSmall: styles.titleSmall,
  bodyLarge: styles.bodyLarge,
  bodyMedium: styles.bodyMedium,
  bodySmall: styles.bodySmall,
};

type Props = {
  color?: Color;
  /**
   * Prop to choose which writing style from MD3 to use
   * @example
   * <Typography variant="displayLarge">Some text</Typography>
   */
  variant?:
    | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    | 'headlineLarge'
    | 'headlineMedium'
    | 'headlineSmall'
    | 'labelLarge'
    | 'labelMedium'
    | 'labelSmall'
    | 'titleLarge'
    | 'titleMedium'
    | 'titleSmall';
  children?: ReactNode;
};
/**
 * Typography component, implementing **Material Design 3** writing. Use prop `variant` to choose which style
 * from material design spec to use
 * @see https://m3.material.io/styles/typography/overview
 */
export const Typography = (props: Props) => {
  const { children, color = 'onBackground', variant = 'bodyMedium' } = props;
  const colorStyle = colors[color];
  const variantStyle = variants[variant];
  return (
    <p className={styles.typographyBase + ' ' + colorStyle + ' ' + variantStyle}>{children}</p>
  );
};
