import React from 'react'
import TopicSearch from './components/TopicSearch'

export default function App(){
  return (
    <div className="appWrap">
      <header className="appHeader">
        <h1>Catalogue — Topic Browser</h1>
        <p className="sub">Search and explore topics quickly</p>
      </header>
      <main>
        <TopicSearch />
      </main>
    </div>
  )
}
