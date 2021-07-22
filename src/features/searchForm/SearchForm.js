import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { throttle } from "lodash"
import { setQuery, setError, toggleIsQuick } from "./searchFormSlice"

export function SearchForm({ setResults, setIsSubmitting }) {
  const query = useSelector((state) => state.searchForm.query)
  // const isSubmitting = useSelector((state) => state.searchForm.isSubmitting)
  const isQuick = useSelector((state) => state.searchForm.isQuick)
  const error = useSelector((state) => state.searchForm.error)
  const dispatch = useDispatch()

  const debounceFetch = React.useCallback(throttle(fetchFromGitHub, 500, { leading: false }), [])

  async function fetchFromGitHub(val) {
    if (!val) return dispatch(setError("Please provide a valid query"))

    dispatch(setError(""))
    setIsSubmitting(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(val)}`)
      if (res.status === 422) {
        dispatch(setError("Unable to process, no valid query was provided"))
      } else {
        const data = await res.json()
        setResults(data)
      }
    } catch (err) {
      throw err
    }

    setIsSubmitting(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    fetchFromGitHub(query)
  }

  React.useEffect(() => {
    if (query.length === 0) return setResults([])
    if (query.length < 3) return

    if (isQuick) {
      debounceFetch(query)
    }
  }, [query])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(event) => {
            dispatch(setQuery(event.target.value))
          }}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={isQuick}
            onChange={() => {
              dispatch(toggleIsQuick())
            }}
          />
          Enable quick search? (Makes requests to the GitHub API as you type)
        </label>
        <br />
        <button type="button" onClick={() => dispatch(setQuery(""))}>
          Clear Query & Results
        </button>
        <button type="submit">Submit</button>
        <br />
        {error && <p>{error}</p>}
      </form>
    </>
  )
}
