import styles from './Typography.module.css';
import { type ReactNode } from 'react';
const colors = {
  primary: styles.primary,
  primaryContainer: styles.primaryContainer,
  onPrimary: styles.onPrimary,
  onPrimaryContainer: styles.onPrimaryContainer,
  secondary: styles.secondary,
  secondaryContainer: styles.secondaryContainer,
  onSecondary: styles.onSecondary,
  onSecondaryContainer: styles.onSecondaryContainer,
  tertiary: styles.tertiary,
  tertiaryContainer: styles.tertiaryContainer,
  onTertiary: styles.onTertiary,
  onTertiaryContainer: styles.onTertiaryContainer,
  error: styles.error,
  errorContainer: styles.errorContainer,
  onError: styles.onError,
  onErrorContainer: styles.onErrorContainer,
  outline: styles.outline,
  background: styles.background,
  onBackground: styles.onBackground,
  surface: styles.surface,
  onSurface: styles.onSurface,
  surfaceVariant: styles.surfaceVariant,
  onSurfaceVariant: styles.onSurfaceVariant,
  inverseSurface: styles.inverseSurface,
  inverseOnSurface: styles.inverseOnSurface,
  inversePrimary: styles.inversePrimary,
  shadow: styles.shadow,
  surfaceTint: styles.surfaceTint,
  outlineVariant: styles.outlineVariant,
  scrim: styles.scrim,
};
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
};
type Props = {
  color?:
    | 'primary'
    | 'primaryContainer'
    | 'onPrimary'
    | 'onPrimaryContainer'
    | 'secondary'
    | 'secondaryContainer'
    | 'onSecondary'
    | 'onSecondaryContainer'
    | 'tertiary'
    | 'tertiaryContainer'
    | 'onTertiary'
    | 'onTertiaryContainer'
    | 'error'
    | 'errorContainer'
    | 'onError'
    | 'onErrorContainer'
    | 'outline'
    | 'background'
    | 'onBackground'
    | 'surface'
    | 'onSurface'
    | 'surfaceVariant'
    | 'onSurfaceVariant'
    | 'inverseSurface'
    | 'inverseOnSurface'
    | 'inversePrimary'
    | 'shadow'
    | 'surfaceTint'
    | 'outlineVariant'
    | 'scrim';
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
export const Typography = (props: Props) => {
  const { children, color, variant } = props;
  const colorStyle = colors[color];
  const variantStyle = variants[variant];
  return (
    <p className={styles.typographyBase + ' ' + colorStyle + ' ' + variantStyle}>{children}</p>
  );
};
