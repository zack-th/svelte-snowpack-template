import App from './App.svelte';
const app = new App({
	target: document.body,
	props: {}
});


export default app;

// if ((import.meta as any).hot) {
// 	(import.meta as any).hot.accept();
// 	(import.meta as any).hot.dispose(() => {
// 		app.$destroy();
// 	});
// }