import styles from './Typography.module.css';
const colors = {
  primary: styles.primaryColor,
  primaryContainer: styles.primaryContainerColor,
  onPrimary: styles.onPrimaryColor,
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
