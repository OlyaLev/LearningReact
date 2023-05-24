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
  return (
    <div>
      <Box direction="column" justifyContent="center" alignItems="center">
        <Typography color={colorType}>{tabIcon}</Typography>
        <Typography variant="titleSmall" color={colorType}>
          {label}
        </Typography>
      </Box>
    </div>
  );
};
