export function SectionMenu({ isOpen, items, onNavigate, title }) {
  return (
    <div className={`section-menu${isOpen ? ' is-open' : ''}`}>
      <div className="section-menu-inner">
        <p className="section-menu-title">{title}</p>
        <div className="section-menu-groups">
          {items.map((group) => (
            <div key={group.groupId} className="section-menu-group">
              <p className="section-menu-group-title">{group.groupLabel}</p>
              <div className="section-menu-list">
                {group.items.map((item) => (
                  <button key={item.id} type="button" onClick={() => onNavigate(item.id)}>
                    <span className="menu-item-label">{item.label}</span>
                    {item.hint ? <span className="menu-item-hint">{item.hint}</span> : null}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
