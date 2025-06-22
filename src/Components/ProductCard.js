
export function ProductCard({product,background= "slategray",onPurchase, ...restProps}) {
  return (
    <article style={{//width: "100%",
  backgroundColor: background,
  border: "1px solid black",
  borderRadius: "8px",
  padding: "16px",
  
 }}>
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
        
      />
      <p>specification:</p>
      <ul style={{listStyleType: 'none', padding: 0}}>
        <li>{product.specification[0]}</li>
        <li>{product.specification[1]}</li>
        <li>{product.specification[2]}</li>
      </ul>
      <button onPurchase={() => onPurchase(product)}>Buy (From ${product.price})</button>
    </article>
  );
}