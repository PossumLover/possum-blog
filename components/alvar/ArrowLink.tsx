import Link from 'next/link'
import { WithChildren } from 'types'

type ArrowLinkProps = {
  href: string
  newTab?: boolean
}

export function ArrowLink({ href, newTab = false, children }: WithChildren<ArrowLinkProps>) {
  return (
    <Link
      href={href}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noreferrer' : ''}
      className={`text-primary-700 dark:text-primary-600 font-semibold no-underline hover:underline`}
    >
      {children} →
    </Link>
  )
}
