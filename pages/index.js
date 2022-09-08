import Head from 'next/head'
import Layout from '../components/Layout'
import PersonCard from '../components/PersonCard'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://opensheet.elk.sh/1B0DTrFzxg7ttRnOXXBjsVKyDJA_N0YGW-WYKeZZgl-o/Sheet1')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  function searchInput(e){
    const allPeople = Array.from(document.querySelectorAll('[class^="PersonCard_person__"]'));
    allPeople.forEach(person => person.classList.remove("hidden"));
    const query = e.target.value;
    const filteredPeople = allPeople.filter(person => !person.innerHTML.includes(query));
    // console.log(filteredPeople.length);
    filteredPeople.forEach(person => person.classList.add("hidden"));
  }

  return (
    <Layout>
      <Head>
        <title>Goal tracking for people</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input 
        type="text" 
        id="peoplesearch" 
        placeholder="Search by name, title or goals"
        onKeyUp={searchInput} 
        className={styles.peoplesearch}
      />
      <div className={styles.people}>
        {data.map((person, index) => {
          return (
            <PersonCard key={index} person={person} />
          )
        })}
      </div>
    </Layout>
  )
}
