import { CSSProperties } from 'react';
type Props = {
  icon:
    | 'search'
    | 'home'
    | 'menu'
    | 'close'
    | 'settings'
    | 'done'
    | 'expand_more'
    | 'check_circle'
    | 'favorite'
    | 'add'
    | 'delete'
    | 'arrow_back'
    | 'star'
    | 'chevron_right';
  /**
   * Prop to establish the size of icon
   * @example
   * <Icon icon="search" fontSize="10px"></Icon>
   */
  fontSize?: string;
  className?: string;
};
/**
 * Icon component, implementing google icons. Use prop `icon` to choose design variant.
 * @see https://fonts.google.com/icons
 */
export const Icon = (props: Props) => {
  const { fontSize, icon, className } = props;
  const iconFontSize: CSSProperties = { fontSize: fontSize };
  const classNameType = `material-symbols-outlined ${className}`;
  return (
    <span style={iconFontSize} className={classNameType}>
      {icon}
    </span>
  );
};
