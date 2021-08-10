export default function handleChangeLanguage(language) {
	if (language === 'zh-CN') {
		localStorage.setItem('language', language)
		return 'zh-CN'
	}
	if (language === 'fr-FR') {
		localStorage.setItem('language', language)
		return 'fr-FR'
	} else {
		localStorage.setItem('language', 'en-US')
		return 'en-US'
	}
}
