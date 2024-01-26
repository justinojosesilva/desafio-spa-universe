import { Router } from "./router.js"
const router =new Router()
router.add('/', '/pages/home.html', 'bg-home', 'nav-home')
router.add('/universe', '/pages/universe.html', 'bg-universe', 'nav-universe')
router.add('/explorer', '/pages/explorer.html', 'bg-explorer', 'nav-explorer')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()