import Link from "next/link"
import { useRouter } from "next/router"

export default function Navigation() {
  const router = useRouter()
  const links = [
    { href: "/", text: "GitHub API" },
    { href: "/merge", text: "Merged Array" },
  ]
  return (
    <nav className="flex flex-wrap py-4">
      <p className="font-bold mr-4">Challenges Navigation:</p>
      <div className="flex flex-wrap space-x-4">
        {links.map((link, index) => {
          return (
            <Link href={link.href} key={index}>
              <a
                className={`underline${
                  link.href === router.pathname ? " italic text-indigo-700" : ""
                }`}
              >
                {link.text}
              </a>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
