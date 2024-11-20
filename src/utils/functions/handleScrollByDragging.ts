export const handleScrollByDragging = (item) => {

  const itemSel = getItem(item)
    if (itemSel) {
      itemSel.scrollTop = 100;
      itemSel.scrollLeft = 150;
    }

  let pos = {
    left: 0,
    top: 0,
    x: 0,
    y: 0,
  };

  // document.addEventListener('mousemove', (e)=>handleMouseMove(e, itemSel, pos))
  // document.addEventListener('mouseup', (e)=>handleMouseUp(e, itemSel, pos))
}

  function getItem (string: string) {
    return document.querySelector('#'+string)
  }

  function handleMouseDown (e, item, pos) {
    pos = {
      left: item.scrollLeft,
      top: item.scrollTop,
      x: e.clientX,
      y: e.clientY,
    }
  }

  function handleMouseMove (e, item, pos) {
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    item.scrollTop = pos.top - dy;
    item.scrollLeft = pos.left - dx;
  }

  function handleMouseUp (e, item, pos) {
    document.removeEventListener('mousemove', (e)=>handleMouseMove(e, item, pos));
    document.removeEventListener('mouseup', (e)=>handleMouseUp(e, item, pos));

    item.style.cursor = 'grab';
    item.style.removeProperty('user-select')
  }