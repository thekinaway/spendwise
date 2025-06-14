export const LayoutContainer = ({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <div className="layout" style={{ background: backgroundColor }}>
      {children}
    </div>
  );
};
