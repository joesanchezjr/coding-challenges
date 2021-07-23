import React from "react"
import Link from "next/link"

import { merge, mergeAlt} from "../../utils/merge"

export default function OverlappingItems() {
  const items = [
    { startPx: 10, endPx: 30 },
    { startPx: 55, endPx: 65 },
    { startPx: 35, endPx: 50 },
    { startPx: 20, endPx: 40 },
    { startPx: 60, endPx: 70 },
  ]

  return (
    <>
      <header className="px-4">
        <nav>
          <Link href="/">
            <a className="px-4">Challenge: GitHub API</a>
          </Link>
          <Link href="/overlapping-items">
            <a className="px-4">Challenge: Overlapping Item</a>
          </Link>
        </nav>
        <h1>Overlapping Items</h1>
      </header>
      <main className="px-4 arrays" style={{ display: "flex" }}>
        <div>
          <h2>Original Array</h2>
          <pre>{JSON.stringify(items, null, 2)}</pre>
        </div>
        <div>
          <h2>Sorted Array</h2>
          <pre>
            {JSON.stringify(
              [...items].sort((a, b) => a.startPx - b.startPx),
              null,
              2
            )}
          </pre>
        </div>
        <div>
          <h2>Merged Array</h2>
          <pre>{JSON.stringify(merge(items), null, 2)}</pre>
        </div>
        <div>
          <h2>Merged Array Alt</h2>
          <pre>{JSON.stringify(mergeAlt(items), null, 2)}</pre>
        </div>
      </main>
    </>
  )
}
