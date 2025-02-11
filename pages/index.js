import { useState } from 'react';

export default function Home() {
  const [productCode, setProductCode] = useState('');
  const [product, setProduct] = useState(null);

  const handleCodeChange = (e) => setProductCode(e.target.value);

  const fetchProduct = async () => {
    const response = await fetch(`http://127.0.0.1:8000/product/${productCode}`);
    const data = await response.json();
    setProduct(data);
  };

  return (
    <div>
      <h1>POSアプリ</h1>
      <input
        type="text"
        placeholder="商品コード"
        value={productCode}
        onChange={handleCodeChange}
      />
      <button onClick={fetchProduct}>商品コード読み込み</button>
      {product && (
        <div>
          <p>商品名: {product.name}</p>
          <p>価格: {product.price}</p>
        </div>
      )}
    </div>
  );
}
