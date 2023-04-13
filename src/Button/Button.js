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
  const result =
    variant === 'filled'
      ? styles.buttonCommon + ' ' + isFullWidth + ' ' + styles.filledButton
      : styles.buttonCommon + ' ' + styles.mainColors + ' ' + isFullWidth + ' ' + outlined;
  console.log(props);

  return <button className={result}>{children}</button>;
};
