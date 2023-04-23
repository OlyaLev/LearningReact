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
  noWrap: styles.noWrap,
};

const alignXVariants = {
  alignXStart: styles.alignXStart,
  alignXEnd: styles.alignXEnd,
  alignXCenter: styles.alignXCenter,
  alignXSpaceBetween: styles.alignXSpaceBetween,
  alignXSpaceAround: styles.alignXSpaceAround,
  alignXSpaceEvenly: styles.alignXSpaceEvenly,
};

const alignYVariants = {
  alignYStart: styles.alignYStart,
  alignYEnd: styles.alignYEnd,
  alignYCenter: styles.alignYCenter,
  alignYBaseline: styles.alignYBaseline,
  alignYStretch: styles.alignYStretch,
};

export const Box = (props) => {
  const { direction, alignX, alignY, wrap } = props;
  const directionStyle = directions[direction];
  const alignXStyle = alignXVariants[alignX];
  const alignYStyle = alignYVariants[alignY];
  const wrapStyle = wraps[wrap];
  return (
    <div
      className={
        styles.boxCommon +
        ' ' +
        directionStyle +
        ' ' +
        alignXStyle +
        ' ' +
        alignYStyle +
        ' ' +
        wrapStyle
      }
    ></div>
  );
};
