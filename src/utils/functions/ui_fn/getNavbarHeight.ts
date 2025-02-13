export const getNavbarHeight = (): number|undefined =>{
  const navbarHeight: number | undefined = document.querySelector('nav')?.getBoundingClientRect().height

  console.log(navbarHeight)

  return navbarHeight
}