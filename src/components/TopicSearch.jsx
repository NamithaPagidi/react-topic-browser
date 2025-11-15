import React, { useState, useMemo } from 'react'
import topics from '../topicsData'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}
const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 22 } },
  tap: { scale: 0.98 }
}

export default function TopicSearch(){
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTopic, setSelectedTopic] = useState(null)

  const filtered = useMemo(()=> {
    const q = searchTerm.trim().toLowerCase()
    if(!q) return topics
    return topics.filter(t => t.name.toLowerCase().includes(q))
  }, [searchTerm])

  return (
    <section className="searchSection">
      <label htmlFor="search" className="visuallyHidden">Search topics</label>

      <motion.div className="searchBox"
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        <input
          id="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search topics by name..."
          aria-label="Search topics"
        />
        {searchTerm && (
          <motion.button
            className="clearBtn"
            onClick={() => setSearchTerm('')}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Clear search"
          >
            ✕
          </motion.button>
        )}
        <motion.span
          className="pulse"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          aria-hidden
        />
      </motion.div>

      <motion.div className="results"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filtered.length > 0 ? (
            filtered.map(item => (
              <motion.article
                key={item.id}
                className="card"
                onClick={() => setSelectedTopic(item)}
                variants={cardVariants}
                whileTap="tap"
                layout
              >
                <h3>{item.name}</h3>
                <p className="category">{item.category}</p>
              </motion.article>
            ))
          ) : (
            <motion.p
              className="noResults"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
            >
              No topics found
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedTopic && (
          <motion.div
            className="modalOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTopic(null)}
          >
            <motion.div
              className="modalBox"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedTopic.name}</h2>
              <p className="category"><strong>Category:</strong> {selectedTopic.category}</p>
              <p style={{ marginTop: "10px", fontSize: "14px" }}>
                This is an example detail view. You can expand this with description, links, or a read-more page.
              </p>

              <motion.button className="closeBtn"
                onClick={() => setSelectedTopic(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
