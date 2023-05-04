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
  direction?: 'row' | 'rowReverse' | 'column' | 'columnReverse';
  justifyContent?: 'start' | 'end' | 'center' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly';
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
   * Prop to set whether items are forced onto one line or can wrap onto multiple lines
   * @example
   * <Box wrap="wrap">
   * <div>item 1</div>
   * <div>item 2</div>
   * </Box>
   */
  wrap?: 'wrap' | 'wrapReverse' | 'noWrap';
  children?: ReactNode;
};
/**
 * Box component to set elements' positioning by using flex. Use prop `direction` to choose
 * horizontal or vertical alignment of items. Use prop `justifyContent`
 * to define the alignment along the main axis and prop `alignItems`
 * to define the alignment perpendicular to the main axis
 */
export const Box = (props: Props) => {
  const {
    direction = 'row',
    justifyContent = 'start',
    alignItems = 'start',
    wrap = 'noWrap',
    children,
  } = props;
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
