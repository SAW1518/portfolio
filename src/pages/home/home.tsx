import { Alert, TitleSection, ExperienceTimeLine, Skills, ButtonLink, Nav } from 'src/components';
import styles from './home.module.css';
import {
  ABOUT_ID,
  CONTACT_ID,
  SKILLS_ID,
  SkillsList,
  EXPERIENCE_ID,
  EMAIL_ADDRESS,
  CV_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  LINKEDIN_TEXT,
  GITHUB_TEXT,
} from 'src/constants';
import { copy } from 'src/utils';
import { useAlert } from 'src/hooks';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { show } = useAlert();
  const { t } = useTranslation();

  const copyOnClick = () => copy({ newClip: EMAIL_ADDRESS, onSuccessCallBack: show });

  const nameText = t('NAME');
  const titleText = t('TITULE');
  const descriptionText = t('DESCRIPTION');
  const skillsText = t('SKILLS');
  const contactTitleText = t('CONTACT_TITULE_SECTION');
  const educationText = t('EDUCATION');
  const careerText = t('CARRER');
  const experienceText = t('EXPERIENCE');
  const downloadCvText = t('DOWNLOAD_CV');

  return (
    <>
      <Nav />
      <div id="pageWrapper" className={styles.pageWrapper}>
        <section>
          <h1 id={ABOUT_ID} className={styles.mainHeading}>{nameText}</h1>
          <h3 className={styles.subHeading}>{titleText}</h3>
          <h4 className={styles.skillsDescription}>{descriptionText}</h4>
        </section>
        <section id={SKILLS_ID} className={styles.pageSectionWrapper}>
          <TitleSection tag="h3" title={skillsText} />
          <Skills skills={SkillsList} />
        </section>
        <div className={styles.contactandEducation}>
          <section id={CONTACT_ID} className={styles.pageSectionWrapper}>
            <TitleSection tag="h3" title={contactTitleText} />
            <div className={styles.contactInfo}>
              <ButtonLink
                type="btn"
                leftIcon="email"
                rightIcon="copy"
                text={EMAIL_ADDRESS}
                buttonProps={{ onClick: copyOnClick }}
              />
              <ButtonLink
                type="link"
                leftIcon="download"
                rightIcon="link"
                text={downloadCvText}
                anchorProps={{
                  target: '_blank',
                  href: CV_URL,
                }}
              />
              <ButtonLink
                type="link"
                leftIcon="linkedin"
                rightIcon="link"
                text={LINKEDIN_TEXT}
                anchorProps={{
                  target: '_blank',
                  href: LINKEDIN_URL,
                }}
              />
              <ButtonLink
                type="link"
                leftIcon="git"
                rightIcon="link"
                text={GITHUB_TEXT}
                anchorProps={{
                  target: '_blank',
                  href: GITHUB_URL,
                }}
              />
            </div>
          </section>
          <section className={styles.pageSectionWrapper}>
            <TitleSection tag="h3" title={educationText} />
            <h3 className={styles.sectionSubTitle}>Tecnológico Mario Molina</h3>
            <h4 className={styles.skillsDescription}>{careerText}</h4>
          </section>
        </div>
        <section id={EXPERIENCE_ID} className={styles.pageSectionWrapper}>
          <TitleSection tag="h3" title={experienceText} />
          <ExperienceTimeLine />
        </section>
        <Alert />
      </div>
    </>
  );
};
