import styles from './Tab.module.css';
import { type ReactNode } from 'react';
import { Typography } from '../Typography/Typography';
import { Box } from '../Box/Box';

type Props = {
  label: string;
  selected?: boolean;
  tabIcon?: ReactNode;
};

export const Tab = (props: Props) => {
  const { label, selected, tabIcon } = props;
  const colorType = selected ? 'primary' : 'onSurface';
  const activeInd = selected ? styles.activeIndicatorExist : styles.activeIndicator;
  return (
    <button className={styles.tabCommon}>
      <Box direction="column" justifyContent="center" alignItems="center">
        <Typography color={colorType}>{tabIcon}</Typography>
        <Typography variant="titleSmall" color={colorType}>
          {label}
        </Typography>
        <div className={activeInd}></div>
      </Box>
    </button>
  );
};
