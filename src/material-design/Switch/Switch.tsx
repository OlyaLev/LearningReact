import styles from './Switch.module.css';

type Props = {
  on?: boolean;
};

/**
 * Switch component, implementing **Material Design 3** selection control to toggle a single item on or off.
 * Use prop `on` to choose the state on.
 * @see https://m3.material.io/components/switch/overview
 */
export const Switch = (props: Props) => {
  const { on } = props;
  const switchOn = on ? styles.switchOnContainer : '';
  const circleType = on ? styles.switchOnCircle : styles.switchOffCircle;
  return (
    <button className={styles.switchContainer + ' ' + switchOn}>
      <div className={circleType}></div>
    </button>
  );
};
