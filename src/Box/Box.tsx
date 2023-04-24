import styles from './Box.module.css';
import { type ReactNode } from 'react';
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

const justifyContentVariants = {
  start: styles.justifyContentStart,
  end: styles.justifyContentEnd,
  center: styles.justifyContentCenter,
  spaceBetween: styles.justifyContentSpaceBetween,
  spaceAround: styles.justifyContentSpaceAround,
  spaceEvenly: styles.justifyContentSpaceEvenly,
};

const alignItemsVariants = {
  start: styles.alignItemsStart,
  end: styles.alignItemsEnd,
  center: styles.alignItemsCenter,
  baseline: styles.alignItemsBaseline,
  stretch: styles.alignItemsStretch,
};
type Props = {
  direction?: 'row' | 'rowReverse' | 'column' | 'columnRweverse';
  justifyContent?: 'start' | 'end' | 'center' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'wrap' | 'wrapReverse' | 'noWrap';
  children?: ReactNode;
};

export const Box = (props: Props) => {
  const { children, direction, justifyContent, alignItems, wrap } = props;
  const directionStyle = directions[direction];
  const justifyContentStyle = justifyContentVariants[justifyContent];
  const alignItemsStyle = alignItemsVariants[alignItems];
  const wrapStyle = wraps[wrap];
  return (
    <div
      className={
        styles.boxCommon +
        ' ' +
        directionStyle +
        ' ' +
        justifyContentStyle +
        ' ' +
        alignItemsStyle +
        ' ' +
        wrapStyle
      }
    >
      {children}
    </div>
  );
};
