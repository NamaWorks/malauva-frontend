export const getFooterTop = ():number => {
  const footer = document.querySelector('footer');
  const footerTop = footer?.getBoundingClientRect().top;
  return footerTop
};