export default function getLanguage() {
	var userLang = navigator.language || navigator.userLanguage
	if (userLang === 'zh-CN') {
		return 'zh-CN'
	}
	if (userLang === 'fr-FR') {
		return 'fr-FR'
	} else {
		return 'en-US'
	}
}
