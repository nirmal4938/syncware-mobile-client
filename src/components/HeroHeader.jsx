// components/HeroHeader.jsx

export default function HeroHeader({ shop }) {
  return (
    <div className="hero">
      <div>
        <div className="shop-name">{shop.name}</div>

        <div className="shop-address">
          📍
          {shop.address}
        </div>

        <div className="powered">
          Powered by
          <span>SyncWare Mobile</span>
        </div>
      </div>

      <button className="new-btn">+ New Receipt</button>
    </div>
  );
}
