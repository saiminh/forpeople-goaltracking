import styles from './PersonCard.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function PersonCard({ person, children }) {

  const [imageReady, setImageReady] = useState(false)

  function imageLoadedCallback(){
    setImageReady(true)
  }

  return (
    <div className={`${styles.person} person`} id={person["Name"].toLowerCase().replace(/\s/g, '-')}>
      <div className={styles.personID}>
        <div className={`${styles.person_image} ${imageReady ? styles.imgLoaded : styles.imgLoading}`}>
          <Image 
            alt={`Picture of ${person["Name"]}`} 
            src={person["Image URL"]} 
            layout="fill" 
            onLoadingComplete={imageLoadedCallback}
            sizes="(max-width: 768px) calc(100vw - 40px), 25vw"
          />
        </div>
        <p className={styles.person_name}>{person["Name"]}</p>
        <p className={styles.person_jobtitle}>{person["Job title"]}</p>
      </div>
      <div className={styles.personGoals}>
        <p className={styles.personGoals_goal}>
          <span className={styles.personGoals_goal_numbering}>01—</span>
          <span className='personGoals_goal_text'>{person["Goal 1"]}</span>
        </p>
        <p className={styles.personGoals_goal}>
          <span className={styles.personGoals_goal_numbering}>02—</span>
          <span className='personGoals_goal_text'>{person["Goal 2"]}</span>
        </p>
        <p className={styles.personGoals_goal}>
          <span className={styles.personGoals_goal_numbering}>03—</span>
          <span className='personGoals_goal_text'>{person["Goal 3"]}</span>
        </p>
        <p className={styles.personGoals_goal}>
          <span className={styles.personGoals_goal_numbering}>04—</span>
          <span className='personGoals_goal_text'>{person["Goal 4"]}</span>
        </p>{children}
      </div>
    </div>
  )
}