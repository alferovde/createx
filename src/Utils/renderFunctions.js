export function simpleRender(array, Element) {
  return array.map((item) => {
    return (
      <Element
        key={item.id}
        to={item.href}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        {item.link}
      </Element>
    );
  });
}
