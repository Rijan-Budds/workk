export const scrollToTop = () => {
  const getHomeLayout = document?.querySelector('.route-layout-container')

  getHomeLayout?.scroll({
    behavior: 'smooth',
    top: 0,
  })
}
