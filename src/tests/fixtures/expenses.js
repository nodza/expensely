import moment from 'moment';

export default [{
  id: 1,
  description: 'Dining',
  note: '',
  amount: 5500,
  createdAt: 0
}, {
  id: 2,
  description: 'Tools',
  note: '',
  amount: 24500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: 3,
  description: 'Software',
  note: '',
  amount: 8500,
  createdAt: moment(0).add(4, 'days').valueOf()
}];