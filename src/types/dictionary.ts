export interface Dictionary {
  navbar: {
    about: string
    experience: string
    skills: string
    projects: string
    contact: string
  }
}

export type NavbarTab = {
  value: string
  icon: string
  labelKey: keyof Dictionary['navbar']
}
