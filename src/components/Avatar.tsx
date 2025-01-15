import styles from './Avatar.module.css';
import { ComponentProps } from 'react';

interface AvatarProps extends ComponentProps<'img'> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, alt, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
