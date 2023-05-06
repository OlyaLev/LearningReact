import styles from './Box.module.css';
import { type CSSProperties, type ReactNode } from 'react';

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
  width?: string;
  /**
   * Prop to set margin-left
   * @example
   * <Box ml="4px"></Box>
   * or
   * <Box ml={2}></Box>
   */
  ml?: string | number;
  /**
   * Prop to set margin-top
   * @example
   * <Box mt="4px"></Box>
   * or
   * <Box mt={2}></Box>
   */
  mt?: string | number;
  /**
   * Prop to set margin-right
   * @example
   * <Box mr="4px"></Box>
   * or
   * <Box mr={2}></Box>
   */
  mr?: string | number;
  /**
   * Prop to set margin-bottom
   * @example
   * <Box mb="4px"></Box>
   * or
   * <Box mb={2}></Box>
   */
  mb?: string | number;
  /**
   * Prop to set margin-left and margin-right
   * @example
   * <Box mx="4px"></Box>
   * or
   * <Box mx={2}></Box>
   */
  mx?: string | number;
  /**
   * Prop to set margin-top and margin-bottom
   * @example
   * <Box my="4px"></Box>
   * or
   * <Box my={2}></Box>
   */
  my?: string | number;
  /**
   * Prop to set margin (left, top, right and bottom)
   * @example
   * <Box m="4px"></Box>
   * or
   * <Box m={2}></Box>
   */
  m?: string | number;
  /**
   * Prop to set padding-left
   * @example
   * <Box pl="4px"></Box>
   * or
   * <Box pl={2}></Box>
   */
  pl?: string | number;
  /**
   * Prop to set padding-top
   * @example
   * <Box pt="4px"></Box>
   * or
   * <Box pt={2}></Box>
   */
  pt?: string | number;
  /**
   * Prop to set padding-right
   * @example
   * <Box pr="4px"></Box>
   * or
   * <Box pr={2}></Box>
   */
  pr?: string | number;
  /**
   * Prop to set padding-bottom
   * @example
   * <Box pb="4px"></Box>
   * or
   * <Box pb={2}></Box>
   */
  pb?: string | number;
  /**
   * Prop to set padding-left and padding-right
   * @example
   * <Box px="4px"></Box>
   * or
   * <Box px={2}></Box>
   */
  px?: string | number;
  /**
   * Prop to set padding-top and padding-bottom
   * @example
   * <Box py="4px"></Box>
   * or
   * <Box py={2}></Box>
   */
  py?: string | number;
  /**
   * Prop to set padding (left, top, right and bottom)
   * @example
   * <Box p="4px"></Box>
   * or
   * <Box p={2}></Box>
   */
  p?: string | number;
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
    width,
    ml,
    mt,
    mr,
    mb,
    mx,
    my,
    m,
    pl,
    pt,
    pr,
    pb,
    px,
    py,
    p,
    children,
  } = props;
  const mlStyle: CSSProperties =
    typeof ml === 'number'
      ? { marginLeft: `${ml * 8}px` }
      : typeof ml === 'string'
      ? { marginLeft: ml }
      : {};
  const mtStyle: CSSProperties =
    typeof mt === 'number'
      ? { marginTop: `${mt * 8}px` }
      : typeof mt === 'string'
      ? { marginTop: mt }
      : {};
  const mrStyle: CSSProperties =
    typeof mr === 'number'
      ? { marginRight: `${mr * 8}px` }
      : typeof mr === 'string'
      ? { marginRight: mr }
      : {};
  const mbStyle: CSSProperties =
    typeof mb === 'number'
      ? { marginBottom: `${mb * 8}px` }
      : typeof mb === 'string'
      ? { marginBottom: mb }
      : {};
  const mxStyle: CSSProperties =
    typeof mx === 'number'
      ? { marginLeft: `${mx * 8}px`, marginRight: `${mx * 8}px` }
      : typeof mx === 'string'
      ? { marginLeft: mx, marginRight: mx }
      : {};
  const myStyle: CSSProperties =
    typeof my === 'number'
      ? { marginTop: `${my * 8}px`, marginBottom: `${my * 8}px` }
      : typeof my === 'string'
      ? { marginTop: my, marginBottom: my }
      : {};
  const mStyle: CSSProperties =
    typeof m === 'number'
      ? {
          margin: `${m * 8}px`,
        }
      : typeof m === 'string'
      ? { margin: m }
      : {};
  const plStyle: CSSProperties =
    typeof pl === 'number'
      ? { paddingLeft: `${pl * 8}px` }
      : typeof pl === 'string'
      ? { paddingLeft: pl }
      : {};
  const ptStyle: CSSProperties =
    typeof pt === 'number'
      ? { paddingTop: `${pt * 8}px` }
      : typeof pt === 'string'
      ? { paddingTop: pt }
      : {};
  const prStyle: CSSProperties =
    typeof pr === 'number'
      ? { paddingRight: `${pr * 8}px` }
      : typeof pr === 'string'
      ? { paddingRight: pr }
      : {};
  const pbStyle: CSSProperties =
    typeof pb === 'number'
      ? { paddingBottom: `${pb * 8}px` }
      : typeof pb === 'string'
      ? { paddingBottom: pb }
      : {};
  const pxStyle: CSSProperties =
    typeof px === 'number'
      ? { paddingLeft: `${px * 8}px`, paddingRight: `${px * 8}px` }
      : typeof px === 'string'
      ? { paddingLeft: px, paddingRight: px }
      : {};
  const pyStyle: CSSProperties =
    typeof py === 'number'
      ? { paddingTop: `${py * 8}px`, paddingBottom: `${py * 8}px` }
      : typeof py === 'string'
      ? { paddingTop: py, paddingBottom: py }
      : {};
  const pStyle: CSSProperties =
    typeof p === 'number' ? { padding: `${p * 8}px` } : typeof p === 'string' ? { padding: p } : {};
  const directionStyle = directions[direction];
  const justifyContentStyle = justifyContentVariants[justifyContent];
  const alignItemsStyle = alignItemsVariants[alignItems];
  const wrapStyle = wraps[wrap];
  const widthStyle: CSSProperties = { width: width };
  const spaceStyle = {
    ...mStyle,
    ...mxStyle,
    ...myStyle,
    ...mlStyle,
    ...mtStyle,
    ...mrStyle,
    ...mbStyle,
    ...pStyle,
    ...pxStyle,
    ...pyStyle,
    ...plStyle,
    ...ptStyle,
    ...prStyle,
    ...pbStyle,
    ...widthStyle,
  };
  return (
    <div
      style={spaceStyle}
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
