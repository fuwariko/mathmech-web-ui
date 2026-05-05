type IconName = 'heart' | 'check' | 'monitor' | 'users';

const iconMap: Record<IconName, string> = {
  heart: '❤️',
  check: '✔️',
  monitor: '💻',
  users: '👥',
};

type IconProps = {
  name: IconName;
  // Можно добавить size, color и т.д.
};

export const Icon = ({ name }: IconProps) => (
  <span aria-hidden="true">{iconMap[name] || '❓'}</span>
);
