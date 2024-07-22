interface ContentItemWithSubtitle {
  subtitle: string
  text: string
}

interface ContentItemWithoutSubtitle {
  text: string
}

type ContentItem = ContentItemWithSubtitle | ContentItemWithoutSubtitle

export interface FooterLink {
  title: string
  subtitle?: string[]
  content: ContentItem[]
}
