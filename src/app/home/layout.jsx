export default function HomeLayout({ children, header, navbar }) {
  return (
    <div>
      {header && <div>{header}</div>}
      {navbar && <div>{navbar}</div>}
      <div>{children}</div>
    </div>
  );
}
