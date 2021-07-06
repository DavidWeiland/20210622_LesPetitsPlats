import { triBySearch } from './triBySearch';

const search = document.querySelector('#search');
const divTags = document.querySelector('.tags');

export const searchListenner = search.addEventListener('input', (e) => {
  divTags.innerHTML=""
  triBySearch(e.target.value)
})