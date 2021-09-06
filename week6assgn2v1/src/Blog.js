function Blog(props) {
    const header = (
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
    )
    const content = props.posts.map((fruit) =>
    <tr>
    <td>{fruit.name}</td>
    <td>{fruit.price}</td>
    <td>{fruit.quantity}</td>
    <td>{fruit.quantity * fruit.price}</td>
    </tr>
      );
    return (
      <div>
      <table>
        {header}
        {content}
      </table>
      </div>
    );
  }

  export default Blog;