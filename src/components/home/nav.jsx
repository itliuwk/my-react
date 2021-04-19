
import './nav.less'
const Nav = (props) => {

  let one = props.navData.slice(0, 21)
  let two = props.navData.slice(21)
  let data = [one, two]
  return (
    <div>
      {data && data.map((item, idx) => {
        return (
          <ul key={idx}>
            { item && item.map((itemChild, index) => {
              return (
                <li key={index + itemChild.text}>
                  <a href={itemChild.url} target='_black'>
                    <img src={itemChild.logo} alt='' />
                    {itemChild.text}
                  </a>
                </li>)
            })}
          </ul>
        )
      })}
    </div>

  )
}

export default Nav
