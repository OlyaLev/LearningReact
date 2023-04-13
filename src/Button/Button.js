// const myStyle = {
//   color: '#ffffff',
//   background: '#15485A',
//   border: 'none',
//   padding: '10px 30px',
//   borderRadius: '100px',
// };

import styles from './Button.module.css';
export const Button = (props) => {
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
      {children}
    </button>
  );
};
