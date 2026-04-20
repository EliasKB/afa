export function SectionMenu({ isOpen, items, onNavigate, title }) {
  return (
    <div className={`section-menu${isOpen ? ' is-open' : ''}`}>
      <div className="section-menu-inner">
        <p className="section-menu-title">{title}</p>
        <div className="section-menu-list">
          {items.map((item) => (
            <button key={item.id} type="button" onClick={() => onNavigate(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
