import Plugins from './plugin'
import Components from './components'
import { makeInstaller } from './make-installer'
export default makeInstaller([...Components, ...Plugins])
