import styles from './Switch.module.css';
import { Box } from '../Box';
import { Typography } from '../Typography';
import React, { useState } from 'react';

type Props = {
  // checked?: boolean;
  label: string;
};

/**
 * Switch component, implementing **Material Design 3** selection control to toggle a single item on or off.
 * Use prop `checked` to choose the state on.
 * @see https://m3.material.io/components/switch/overview
 */
export const Switch = (props: Props) => {
  const { label } = props;
  // const switchOn = checked ? styles.switchOnContainer : '';
  // const circleType = checked ? styles.switchOnCircle : styles.switchOffCircle;
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <Box direction="row" justifyContent="spaceEvenly" alignItems="center">
      <Typography>{label}</Typography>
      <label className={styles.toggleSwitch}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={styles.switch} />
      </label>
    </Box>
  );
};
