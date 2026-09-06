import styles from "./GuideLayout.module.scss";

interface GuideLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function GuideLayout({
  title,
  children,
  className,
}: GuideLayoutProps) {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
