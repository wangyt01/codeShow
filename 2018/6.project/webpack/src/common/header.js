import tpl from './header.tpl';


export default function HeaderTpl() {
	const data = {
		title: '我是头部',
	}
	return {
		tpl: tpl(data)
	}
}