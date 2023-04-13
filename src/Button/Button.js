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
  const outlined = variant === 'outlined' ? styles.outlinedButton : '';
  console.log(props);
  if (variant === 'filled') {
    return (
      <button className={styles.buttonCommon + ' ' + isFullWidth + ' ' + styles.filledButton}>
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={
          styles.buttonCommon + ' ' + styles.textButton + ' ' + isFullWidth + ' ' + outlined
        }
      >
        {children}
      </button>
    );
  }
};
