import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.css'

interface Repository {
  name: string
  description: string
  html_url: string
}


export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/devMagno/repos')
      .then(r => r.json())
      .then(data => setRepositories(data))
  }, [])

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul> 
        {repositories.map(repo => {
          return <RepositoryItem key={repo.name} repository={repo}/>
        })}
      </ul>
    </section>
  );
}