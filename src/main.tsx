import { ConfigProvider } from 'antd'
import locale from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/index.scss'

moment.locale('zh-cn')

if (import.meta.env.VITE_ENABLE_MOCK === 1) {
  const { worker } = await import('./mocks/browser')
  await worker.start({ onUnhandledRequest: 'bypass' })
}

render(
  <Router>
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById('root'),
)
