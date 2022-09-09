import Head from 'next/head'
import Layout from '../components/Layout'
import PersonCard from '../components/PersonCard'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [hiddeninfo, setHiddenInfo] = useState(0)
  let totalAmountOfPeople = useRef(0)

  useEffect(() => {
    setLoading(true)
    fetch('https://opensheet.elk.sh/1B0DTrFzxg7ttRnOXXBjsVKyDJA_N0YGW-WYKeZZgl-o/Sheet1')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        //set total amount of people after data loaded
        totalAmountOfPeople.current = data.length
      })
      .then(() => { 
        hashHandler()
        window.addEventListener('hashchange', () => { hashHandler() })
      })
  }, [])
  
  function hashHandler(){
    // if there's a hash in the URL, hide everyone but that person
    const currentURL = window.location.href;
    if (currentURL.includes('#')) {
      const anchor = currentURL.slice(currentURL.indexOf("#"));
        
      const target = document.querySelector(anchor);
      const allPeople = document.querySelectorAll('[class^="PersonCard_person__"]');
      if (target) {
        allPeople.forEach((person) => {
          person.classList.add("hidden");
        })
        target.classList.remove("hidden");
        setHiddenInfo(document.querySelectorAll('.hidden').length);
      }
    }
  }

  function cleanUpMarkers(){
    const allMarkers = Array.from(document.getElementsByTagName('mark'));
    allMarkers.forEach((marker) => {
      const text = marker.innerText
      marker.replaceWith(text)
    })
  }

  function searchInput(e){

    const query = e.target.value.toLowerCase();

    let allPeople = Array.from(document.querySelectorAll('[class^="PersonCard_person__"]'));
    cleanUpMarkers();
    
    const filteredPeople = allPeople.filter(person => !person.innerText.toLowerCase().includes(query));
    const selectedPeople = allPeople.filter(person => person.innerText.toLowerCase().includes(query));
    
    
    selectedPeople.forEach((person) => {
      let name = person.querySelector('[class^="PersonCard_person_name"]').innerHTML;
      let cleanName = name.replaceAll('<mark>', '').replaceAll('</mark>', ''); 
      let title = person.querySelector('[class^="PersonCard_person_jobtitle"]').innerHTML;
      let cleanTitle = title.replaceAll('<mark>', '').replaceAll('</mark>', ''); 
      let goals = Array.from(person.querySelectorAll('.personGoals_goal_text'));
      let cleanGoals = goals.map((goal) => {
        goal.innerHTML = goal.innerHTML.replaceAll('<mark>', '').replaceAll('</mark>', '');
        return goal;
      });
      
      cleanGoals.forEach((goal) => {
        let posGoal = goal.innerHTML.toLowerCase().indexOf(query);
        if (posGoal > -1) {
          let newGoal = goal.innerHTML.substring(0, posGoal) + '<mark>' + goal.innerHTML.substring(posGoal, posGoal + query.length) + '</mark>' + goal.innerHTML.substring(posGoal + query.length);
          goal.innerHTML = newGoal;
        }
      })
      
      let posTitle = cleanTitle.toLowerCase().indexOf(query);
      if (posTitle > -1){
        let newTitle = cleanTitle.substring(0, posTitle) + '<mark>' + cleanTitle.substring(posTitle, posTitle + query.length) + '</mark>' + cleanTitle.substring(posTitle + query.length);
        person.querySelector('[class^="PersonCard_person_jobtitle"]').innerHTML = newTitle;
      }

      let posName = cleanName.toLowerCase().indexOf(query);
      if (posName > -1){
        let newName = cleanName.substring(0, posName) + '<mark>' + cleanName.substring(posName, posName + query.length) + '</mark>' + cleanName.substring(posName + query.length);
        person.querySelector('[class^="PersonCard_person_name"]').innerHTML = newName;
      }
    })

    
    allPeople.forEach(person => {
      person.classList.remove("hidden");
    });
    
    if (query.length > 0) {
      filteredPeople.forEach(person => person.classList.add("hidden"));
      setHiddenInfo(filteredPeople.length);
    } else {
      setHiddenInfo(0);
      cleanUpMarkers();
    }
  }

  function showAll(){
    
    const hiddenPeople = document.querySelectorAll('.hidden');
    hiddenPeople.forEach(person => person.classList.remove("hidden"));

    const searchBar = document.querySelector('#peoplesearch');
    searchBar.value = "";

    setHiddenInfo(0); 
    
    cleanUpMarkers();

    //remove hash from URL
    const currentURL = window.location.href;
    if (currentURL.includes('#')) {
      const anchor = currentURL.slice(currentURL.indexOf("#"));
      window.location.href = currentURL.replace(anchor, "");
    }
  }
  
  return (
    <Layout>
      <Head>
        <title>Goal tracking for people</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.searchWrapper}>
        <div className={styles.showall} onClick={showAll}>
          <span className={styles.showall_status}>
            { hiddeninfo ? `Showing ${totalAmountOfPeople.current-hiddeninfo} out of ${totalAmountOfPeople.current} people` : "" }
          </span>
          { 
            hiddeninfo ?
              <svg className={styles.showall_clear} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252"><path d="M126 0C56.523 0 0 56.523 0 126s56.523 126 126 126 126-56.523 126-126S195.477 0 126 0zm0 234c-59.551 0-108-48.449-108-108S66.449 18 126 18s108 48.449 108 108-48.449 108-108 108z"/><path d="M164.612 87.388a9 9 0 0 0-12.728 0L126 113.272l-25.885-25.885a9 9 0 0 0-12.728 0 9 9 0 0 0 0 12.728L113.272 126l-25.885 25.885a9 9 0 0 0 6.364 15.364 8.975 8.975 0 0 0 6.364-2.636L126 138.728l25.885 25.885c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636a9 9 0 0 0 0-12.728L138.728 126l25.885-25.885a9 9 0 0 0-.001-12.727z"/></svg>
            : ""
          }
        </div>
        <input 
          type="text" 
          id="peoplesearch" 
          placeholder="Search by name, title or goals"
          onKeyUp={searchInput} 
          className={styles.peoplesearch}
        />
      </div>
      <div className={isLoading ? `${styles.contentLoading} ${styles.people}` : `${styles.contentLoaded} ${styles.people}`}>
        { isLoading ?
          <p>Loading...</p> :
          
          !data ?
          <p>No data</p> :

          data.map((person, index) => {
            return (
              <PersonCard key={index} person={person} />
            )
          })
        }
      </div>
    </Layout>
  )
}
