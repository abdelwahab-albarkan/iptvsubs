/** Runs before paint (inlined in <head>) so the saved theme applies without a flash. */
export const THEME_INIT_SCRIPT = `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`;
