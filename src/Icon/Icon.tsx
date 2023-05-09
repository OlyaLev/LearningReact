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
   * <Icon fontSize="10px"></Icon>
   */
  fontSize?: string;
};
/**
 * Icon component, implementing google icons. Use prop `icon` to choose design variant.
 * @see https://fonts.google.com/icons
 */
export const Icon = (props: Props) => {
  const { fontSize, icon } = props;
  const iconFontSize: CSSProperties = { fontSize: fontSize };
  return (
    <div>
      <span style={iconFontSize} className="material-symbols-outlined">
        {icon}
      </span>
    </div>
  );
};