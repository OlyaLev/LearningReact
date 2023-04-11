// const myStyle = {
//   color: '#ffffff',
//   background: '#15485A',
//   border: 'none',
//   padding: '10px 30px',
//   borderRadius: '100px',
// };

import styles from './Button.module.css';

export const Button = (props) => {
  const fullWidthClassName = props.fullWidth ? styles.fullWidthClassName : '';
  console.log(props);
  return (
    <div>
      <button className={styles.myStyle + ' ' + fullWidthClassName}>Button</button>
    </div>
  );
};
