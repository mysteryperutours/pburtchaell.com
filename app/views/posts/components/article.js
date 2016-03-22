export default const Article = props => (
  <article role="">
    <header>
      <h1>{props.title}</h1>
    </header>
    <div>
      {props.body}
    </div>
  </article>
);
