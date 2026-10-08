function Product() {

  function hello() {
    alert("Hello Sonu");
  }

  return (
    <button onMessage={hello}>
      Click Me
    </button>
  );
}
export default Product;