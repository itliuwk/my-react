import { Spin } from 'antd'
import './index.less'
const SPIN = () => {
  return (
    <div className='loading'>
      加载中。。。
      <Spin />
    </div>
  )
}

export default SPIN