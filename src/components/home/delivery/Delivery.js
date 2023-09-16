import TuneIcon from '@mui/icons-material/Tune';

import Filter from '../filter/Filter';
import DeliveryCollections from './DeliveryCollections';

function Delivery() {

  const deliveryFilters =[
    {
      id:1,
      icon:<TuneIcon/>,
      title:"Filters"
    },{
      id:2,
      title:"Rating: 4.0+"
    }
]
  return (
    <div>
      <Filter filterList={deliveryFilters}/>
      <DeliveryCollections/>
    </div>
  )
}

export default Delivery;