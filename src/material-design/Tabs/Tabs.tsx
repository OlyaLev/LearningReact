import styles from './Tabs.module.css';
import { type ReactNode } from 'react';
import { Box } from '../Box/Box';
type Props = {
  children?: ReactNode;
};
export const Tabs = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Box direction="row" justifyContent="spaceBetween" alignItems="center" mx={10} my={5}>
        {children}
      </Box>
    </div>
  );
};
