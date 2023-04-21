import styles from './Box.module.css';
const directions = {
  row: styles.row,
  rowReverse: styles.rowReverse,
  column: styles.column,
  columnReverse: styles.columnReverse,
};
const wraps = {
  wrap: styles.wrap,
  wrapReverse: styles.wrapReverse,
};
export const Box = (props) => {
  const { direction, alignX, alignY, wrap } = props;
  const directionStyle = directions[direction];
  const wrapStyle = wraps[wrap];
  return <div className={styles.boxCommon + ' ' + directionStyle + ' ' + wrapStyle}></div>;
};
