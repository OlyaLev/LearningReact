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
  const isFullWidth = fullWidth ? styles.fullWidth : '';
  const isOutlined = variant === 'outlined' ? styles.outlinedButton : '';
  const isMainColors = variant === 'filled' ? '' : styles.mainColors;
  const isFilled = variant === 'filled' ? styles.filledButton : '';
  return (
    <button
      className={
        styles.buttonCommon +
        ' ' +
        isMainColors +
        ' ' +
        isFullWidth +
        ' ' +
        isFilled +
        ' ' +
        isOutlined
      }
    >
      {children}
    </button>
  );
};
