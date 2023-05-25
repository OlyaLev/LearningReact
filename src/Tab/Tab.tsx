import styles from './Tab.module.css';
import { type ReactNode } from 'react';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box';
import { colors } from '../utils/color';

type Props = {
  label: string;
  selected?: boolean;
  tabIcon?: ReactNode;
};

export const Tab = (props: Props) => {
  const { label, selected, tabIcon } = props;
  const colorType = selected ? 'primary' : 'onSurface';
  return (
    <button className={styles.tabCommon + ' ' + styles.tabHeight}>
      <Box direction="column" justifyContent="start" alignItems="center" height="100%">
        <div className={colors[colorType] + ' ' + styles.iconContainer}>{tabIcon}</div>
        <Box direction="column" justifyContent="spaceBetween" alignItems="center" height="48px">
          <Typography variant="titleSmall" color={colorType}>
            {label}
          </Typography>
          {selected ? <div className={styles.activeIndicator}></div> : null}
        </Box>
      </Box>
    </button>
  );
};
