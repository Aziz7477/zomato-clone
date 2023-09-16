

export default function FilterItem({filter}) {
  return (
    <div className="filter-item">
        <div className="icon">{filter.icon && filter.icon}</div> 
        <div>{filter.title}</div>
    </div>
  )
}
