import styles from './Typography.module.css';
export const Typography = (props) => {
  const { children, color } = props;
  const primaryColor = color === 'primary' ? styles.primaryColor : '';
  const primaryContainerColor = color === 'primaryContainer' ? styles.primaryContainerColor : '';
  const onPrimaryColor = color === 'onPrimary' ? styles.onPrimaryColor : '';
  return (
    <p
      className={
        styles.typographyFont +
        ' ' +
        primaryColor +
        ' ' +
        primaryContainerColor +
        ' ' +
        onPrimaryColor
      }
    >
      {children}
    </p>
  );
};
