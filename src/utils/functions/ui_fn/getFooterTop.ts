export const getFooterTop = ():number => {
  const footer = document.querySelector('footer');
  const footerTop = Number(footer?.getBoundingClientRect().top);
  return footerTop
};