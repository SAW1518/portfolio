

import styles from "./title-section.module.css";

interface TitleSectionType {
    tag: 'h3' | 'h4'
    title: string
}

export const TitleSection = ({ tag, title }: TitleSectionType) => {
    const HeaderComponent = tag;
    return (
        <HeaderComponent className={styles.sectionTitle}>{title}</HeaderComponent>
    )
}