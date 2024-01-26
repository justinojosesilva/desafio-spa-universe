export class Router {
  routes = {}

  add(routeName, page, className, navlink ) {
    this.routes[routeName] = { 
      page,
      className,
      navlink
    }
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({},"", event.target.href)
  
    this.handle()
  }
  
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]
    this.removeBackground()
    document.querySelector('body').classList.add(route.className)
    document.querySelector(`#${route.navlink}`).classList.add('selected')
    fetch(route.page)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }

  removeBackground(){
    document.querySelector('body').classList.remove(
        'bg-home', 
        'bg-universe', 
        'bg-explorer', 
        )
    
    document.querySelector('#nav-home').classList.remove('selected')
    document.querySelector('#nav-universe').classList.remove('selected')
    document.querySelector('#nav-explorer').classList.remove('selected')
  }
}