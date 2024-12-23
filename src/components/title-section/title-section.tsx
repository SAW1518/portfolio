import styles from "./title-section.module.css";

interface TitleSectionType {
  tag: "h3" | "h4";
  title: string;
}

export const TitleSection = ({ tag, title }: TitleSectionType) => {
  const HeaderComponent = tag;
  return (
    <HeaderComponent className={tag === "h3" ? styles.sectionTitle : styles.sectionSubTitle}>
      {title}
    </HeaderComponent>
  );
};
