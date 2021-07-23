import React from "react"
import { useSelector } from "react-redux"
import { SearchForm } from "../features/searchForm/SearchForm"
import UsersTable from "../components/UsersTable"

export default function Home() {
  const query = useSelector((state) => state.searchForm.query)

  const [results, setResults] = React.useState([])
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  React.useEffect(() => {
    if (query.length === 0) setResults([])
  }, [query])

  return (
    <>
      <header className="px-4">
        <h1>Github API - Search (Users)</h1>
        <p>An example app of using the GitHub API to search for users.</p>
      </header>
      <main className="px-4">
        <h2>Search</h2>
        <SearchForm {...{ setResults, setIsSubmitting }} />
        <h2>Results from API Query:</h2>
        <UsersTable {...{ users: results, isSubmitting }} />
      </main>
    </>
  )
}
