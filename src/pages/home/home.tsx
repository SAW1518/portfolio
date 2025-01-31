import { Alert, TitleSection, ExperienceTimeLine, Skills, ButtonLink, Nav } from 'src/components';
import styles from './home.module.css';
import { ABOUT_ID, CONTACT_ID, SKILLS_ID, SkillsList, EXPERIENCE_ID } from 'src/constants';
import { copy } from 'src/utils';
import { useAlert } from 'src/hooks';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { show } = useAlert();
  const { t } = useTranslation();

  const copyOnClick = () =>
    copy({ newClip: 'contactojesusenriqueul@gmail.com', onSuccessCallBack: show });

  return (
    <>
      <Nav />
      <div id="pageWrapper" className={styles.pageWrapper}>
        <section>
          <h1 id={ABOUT_ID} className={styles.mainHeading}>
            {t('NAME')}
          </h1>
          <h3 className={styles.subHeading}>{t('TITULE')}</h3>
          <h4 className={styles.skillsDescription}>{t('DESCRIPTION')}</h4>
        </section>
        <section id={SKILLS_ID} className={styles.pageSectionWrapper}>
          <TitleSection tag="h3" title={t('SKILLS')} />
          <Skills skills={SkillsList} />
        </section>
        <div className={styles.contactandEducation}>
          <section id={CONTACT_ID} className={styles.pageSectionWrapper}>
            <TitleSection tag="h3" title={t('CONTACT_TITULE_SECTION')} />
            <div className={styles.contactInfo}>
              <ButtonLink
                type="btn"
                leftIcon="email"
                rightIcon="copy"
                text="contactojesusenriqueul@gmail.com"
                buttonProps={{ onClick: copyOnClick }}
              />
              <ButtonLink
                type="link"
                leftIcon="phone"
                rightIcon="link"
                text="+523881027335"
                anchorProps={{
                  target: '_blank',
                  href: 'https://api.whatsapp.com/send/?phone=523881027335',
                }}
              />
              <ButtonLink
                type="link"
                leftIcon="linkedin"
                rightIcon="link"
                text="linkedin.com/in/jesus-enrique-ul"
                anchorProps={{
                  target: '_blank',
                  href: 'https://www.linkedin.com/in/jesus-enrique-ul',
                }}
              />
              <ButtonLink
                type="link"
                leftIcon="git"
                rightIcon="link"
                text="github.com/SAW1518"
                anchorProps={{
                  target: '_blank',
                  href: 'https://github.com/SAW1518',
                }}
              />
            </div>
          </section>
          <section className={styles.pageSectionWrapper}>
            <TitleSection tag="h3" title={t('EDUCATION')} />
            <h3 className={styles.sectionSubTitle}>Tecnológico Mario Molina</h3>
            <h4 className={styles.skillsDescription}>{t('CARRER')}</h4>
          </section>
        </div>
        <section id={EXPERIENCE_ID} className={styles.pageSectionWrapper}>
          <TitleSection tag="h3" title={t('EXPERIENCE')} />
          <ExperienceTimeLine />
        </section>
        <Alert />
      </div>
    </>
  );
};
