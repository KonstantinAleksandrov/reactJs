

const Table = (props) => {
  const {list, title} = props
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, key) => {
          return <tr key={item.id + key}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default Table