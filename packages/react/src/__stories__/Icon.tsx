export function Icon({
  name,
  filled,
  style,
  size,
  ...props
}: {
  name: string;
  filled?: boolean;
  size?: number;
} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className="material-symbols-outlined"
      data-filled={filled}
      {...props}
      style={{
        fontSize: size,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
