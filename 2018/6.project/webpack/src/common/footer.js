import tpl from './footer.tpl';


export default function FooterTpl() {
	const data = {
		title: '我是底部1',
	}
	return {
		tpl: tpl(data)
	}
}