import type { User } from '@/payload-types'

export const checkRole = (
  allRoles: User['roles'],
  user:
    | (User & {
        collection: 'users'
      })
    | null,
): boolean => {
  if (user) {
    if (
      allRoles?.some((role) => {
        return user?.roles?.some((individualRole) => {
          return individualRole === role
        })
      })
    )
      return true
  }

  return false
}
