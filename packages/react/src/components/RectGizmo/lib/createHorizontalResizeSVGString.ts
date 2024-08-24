/**
 * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Awidth%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4024
 */
export function createHorizontalResizeSVGString(deg: number) {
  return `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><defs><filter id="shadow"><feDropShadow dx="0" dy="0" stdDeviation="32" flood-color="black" flood-opacity="1"/></filter></defs><path style="filter:url(#shadow);" transform="rotate(${deg} 480 -480)" stroke="white" stroke-width="48" d="M290.74-290.042 100.782-480 290.74-669.958l74.522 74.653-61.739 62.304h352.954l-61.305-62.869 74.088-74.088L859.218-480 669.826-290.607l-74.654-74.088 61.305-62.304H302.958l62.435 62.304-74.653 74.653Z" /></svg>`;
}
