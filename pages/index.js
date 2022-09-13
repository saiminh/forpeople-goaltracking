import Head from 'next/head'
import Layout from '../components/Layout'
import PersonCard from '../components/PersonCard'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [numOfHiddenPeople, setNumOfHiddenPeople] = useState(0)
  let totalAmountOfPeople = useRef(0)

  useEffect(() => {

    const hashChangeHandler = function(){
      console.log('Hashchanhe@@@');
      const currentURL = decodeURI(window.location.href);

      if (currentURL.includes('#all') || !currentURL.includes('#')) {
        // if there's a hash #all in the URL with a name, or no hash, show all people
        const allPeople = document.querySelectorAll('[class^="PersonCard_person__"]');
        allPeople.forEach((person) => {
          person.classList.remove('hidden');
        })
        setNumOfHiddenPeople(0);
      } 
      else if (currentURL.includes('#')) {
         // if there's a hash in the URL with a name, hide everyone but that person
        const anchor = currentURL.slice(currentURL.indexOf("#"));
        const target = document.querySelector(anchor);
        const allPeople = document.querySelectorAll('[class^="PersonCard_person__"]');
      
        if (target) { //if the person exists
          allPeople.forEach((person) => {
            person.classList.add("hidden");
          })
          target.classList.remove("hidden");
          setNumOfHiddenPeople(document.querySelectorAll('.hidden').length);
          cleanUpMarkers();
          const searchBar = document.querySelector('#peoplesearch');
          searchBar.value = "";
        } 
        else {
          console.log('no target');
        }
      }
    }

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
        window.addEventListener('hashchange', () => { hashChangeHandler() });
      })
      .then(() => { 
        setTimeout(hashChangeHandler, 100);        
      })
  }, [])
  

  function cleanUpMarkers(){

    const allMarkers = Array.from(document.getElementsByTagName('mark'));
    allMarkers.forEach((marker) => {
      const text = marker.innerHTML
      marker.replaceWith(text)
    })
  }

  function searchInput(e){

    const searchQuery = e.target.value.toLowerCase();
    let allPeople = Array.from(document.querySelectorAll('[class^="PersonCard_person__"]'));

    cleanUpMarkers();
    
    const filteredPeople = allPeople.filter(person => !person.innerText.toLowerCase().includes(searchQuery));
    const selectedPeople = allPeople.filter(person => person.innerText.toLowerCase().includes(searchQuery));
    
    selectedPeople.forEach((person) => {
      let name = person.querySelector('[class^="PersonCard_person_name"]');
      let title = person.querySelector('[class^="PersonCard_person_jobtitle"]');
      let goals = Array.from(person.querySelectorAll('.personGoals_goal_text'));
      let searchedObjects = goals.concat(name, title);
      
      searchedObjects.forEach((searchedObject) => {
        let positionOfResult = searchedObject.innerHTML.toLowerCase().indexOf(searchQuery);
        if (positionOfResult > -1) {
          let newGoal = searchedObject.innerHTML.substring(0, positionOfResult) + '<mark>' + searchedObject.innerHTML.substring(positionOfResult, positionOfResult + searchQuery.length) + '</mark>' + searchedObject.innerHTML.substring(positionOfResult + searchQuery.length);
          searchedObject.innerHTML = newGoal;
        }
      })
    })
    
    allPeople.forEach(person => {
      person.classList.remove("hidden");
    });
    
    if (searchQuery.length > 0) {
      filteredPeople.forEach(person => person.classList.add("hidden"));
      setNumOfHiddenPeople(filteredPeople.length);
    } else {
      setNumOfHiddenPeople(0);
      cleanUpMarkers();
    }
  }

  function resetSearch(){
    
    const hiddenPeople = document.querySelectorAll('.hidden');
    hiddenPeople.forEach(person => person.classList.remove("hidden"));

    const searchBar = document.querySelector('#peoplesearch');
    searchBar.value = "";

    setNumOfHiddenPeople(0); 
    
    cleanUpMarkers();

    //remove hash from URL
    const currentURL = window.location.href;
    if (currentURL.includes('#')) {
      const anchor = currentURL.slice(currentURL.indexOf("#"));
      window.location.href = currentURL.replace(anchor, "#all");
    }
  }
  
  return (
    <Layout extraClass={totalAmountOfPeople.current-numOfHiddenPeople > 1 ? `` : `personIsPinned`}>
      <Head>
        <title>Goal tracking for people</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.searchWrapper}>
        <div className={styles.showall} onClick={resetSearch}>
          <span className={styles.showall_status}>
            { numOfHiddenPeople ? `Showing ${totalAmountOfPeople.current-numOfHiddenPeople} out of ${totalAmountOfPeople.current} people` : "" }
          </span>
          { 
            numOfHiddenPeople ?
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
              <PersonCard key={index} person={person}>
                <a className={styles.personPin} href={ `#${person["Name"].toLowerCase().replace(/\s/g, '-')}` }>
                  #
                </a>
              </PersonCard>
            )
          })
        }
      </div>
    </Layout>
  )
}
