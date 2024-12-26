
export const getNavbarHeight = (): number =>{
  const navbarHeight: number | undefined = document.querySelector('nav')?.getBoundingClientRect().height

  console.log(navbarHeight)

  return navbarHeight
}