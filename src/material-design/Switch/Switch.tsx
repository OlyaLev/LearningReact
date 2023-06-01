import styles from './Switch.module.css';

type Props = {
  checked?: boolean;
};

/**
 * Switch component, implementing **Material Design 3** selection control to toggle a single item on or off.
 * Use prop `checked` to choose the state on.
 * @see https://m3.material.io/components/switch/overview
 */
export const Switch = (props: Props) => {
  const { checked } = props;
  const switchOn = checked ? styles.switchOnContainer : '';
  const circleType = checked ? styles.switchOnCircle : styles.switchOffCircle;
  return (
    <button className={styles.switchContainer + ' ' + switchOn}>
      <div className={circleType}></div>
    </button>
  );
};
