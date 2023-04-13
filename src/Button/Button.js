// const myStyle = {
//   color: '#ffffff',
//   background: '#15485A',
//   border: 'none',
//   padding: '10px 30px',
//   borderRadius: '100px',
// };

import styles from './Button.module.css';
export const Button = (props) => {
  const { children } = props;
  const fullWidth = props.fullWidth ? styles.fullWidth : '';
  const outlined = props.variant === 'outlined' ? styles.whiteButton : '';
  console.log(props);
  return (
    <button
      className={styles.buttonCommon + ' ' + styles.blueButton + ' ' + fullWidth + ' ' + outlined}
    >
      {children}
    </button>
  );
};
