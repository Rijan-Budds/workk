export interface INavSubLink {
  id: number
  title: string
  link: string
}

export interface INavLink {
  id: number
  title: string
  sublink: INavSubLink[]
  isDropDown: boolean
}

export interface IDropdownList {
  title: string
  value: string
}
