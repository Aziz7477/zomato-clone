import FilterItem from "./FilterItem"


function Filter({ filterList }) {
  return (
      <div className="max-width filters">
        {
          filterList && filterList.map((filter) => {
            return <FilterItem filter={filter} key={filter.id}/>
          })
        }
      </div>
   
  )
}

export default Filter