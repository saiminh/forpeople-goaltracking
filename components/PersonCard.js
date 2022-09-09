import styles from './PersonCard.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function PersonCard({ person }) {

  const [imageReady, setImageReady] = useState(false)

  function imageLoadedCallback(){
    setImageReady(true)
  }

  return (
    <div className={styles.person} id={person["Name"].toLowerCase().replace(/\s/g, '-')}>
    <div className={styles.personID}>
      <div className={`${styles.person_image} ${imageReady ? styles.imgLoaded : styles.imgLoading}`}>
        <Image 
          alt={`Picture of ${person["Name"]}`} 
          src={person["Image URL"]} 
          layout="fill" 
          onLoadingComplete={imageLoadedCallback}
        />
      </div>
      <p className={styles.person_name}>{person["Name"]}</p>
      <p className={styles.person_jobtitle}>{person["Job title"]}</p>
    </div>
    <div className={styles.personGoals}>
      <p className={styles.personGoals_goal}><span className={styles.personGoals_goal_numbering}>01—</span>{person["Goal 1"]}</p>
      <p className={styles.personGoals_goal}><span className={styles.personGoals_goal_numbering}>02—</span>{person["Goal 2"]}</p>
      <p className={styles.personGoals_goal}><span className={styles.personGoals_goal_numbering}>03—</span>{person["Goal 3"]}</p>
      <p className={styles.personGoals_goal}><span className={styles.personGoals_goal_numbering}>04—</span>{person["Goal 4"]}</p>
    </div>
  </div>
  )
}