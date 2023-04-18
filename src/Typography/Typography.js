import styles from './Typography.module.css';
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
export const Typography = (props) => {
  const { children, color } = props;
  const colorStyle = colors[color];
  return (
    <div>
      <p className={colorStyle}>{children}</p>
    </div>
  );
};
