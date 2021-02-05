import '@riotjs/hot-reload'
import { component } from 'riot'
import App from './app.riot'
import registerGlobalComponents from './register-global-components'

registerGlobalComponents()
component(App)(document.getElementById('root'))