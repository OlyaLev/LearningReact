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
  const marginSelect = selected ? '' : styles.marginSelect;
  return (
    <button className={styles.tabCommon}>
      <Box direction="column" justifyContent="start" alignItems="center" mt={tabIcon ? '' : '27px'}>
        <div className={colors[colorType] + ' ' + styles.iconContainer}>{tabIcon}</div>
        <Box direction="column" justifyContent="start" alignItems="center">
          <Typography variant="titleSmall" color={colorType}>
            <div className={marginSelect}>{label}</div>
          </Typography>
          {selected ? <div className={styles.activeIndicator}></div> : null}
        </Box>
      </Box>
    </button>
  );
};
