import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  guests: [
    {id: 1, title: 'взрослые', quantity: 0},
    {id: 2, title: 'дети', quantity: 0},
    {id: 3, title: 'младенцы', quantity: 0},
  ],
  rules: [
    {id: 1, title: 'Можно курить', checked: false},
    {id: 2, title: 'Можно с питомцами', checked: true},
    {id: 3, title: 'Можно пригласить гостей (до 10 человек)', checked: true},
  ],
  availability: [
    {id: 1, title: 'Широкий коридор', subtitle: 'Ширина коридоров в номере не менее 91 см.', checked: false},
    {
      id: 2,
      title: 'Помощник для инвалидов',
      subtitle: 'На 1 этаже вас встретит специалист  и проводит до номера.',
      checked: false,
    },
  ],
  comfort: [
    {id: 1, title: 'спальни', quantity: 0},
    {id: 2, title: 'кровати', quantity: 0},
    {id: 3, title: 'ванные комнаты', quantity: 0},
  ],
  additionally: [
    {id: 1, title: 'Завтрак', checked: false},
    {id: 2, title: 'Письменный стол', checked: true},
    {id: 3, title: 'Стул для кормления', checked: true},
    {id: 4, title: 'Кроватка', checked: true},
    {id: 5, title: 'Телевизор', checked: false},
    {id: 6, title: 'Шампунь', checked: false},
  ]
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCheck: (state, action) => {
      state.rules = action.payload;
    },
    changeAdditionally: (state, action) => {
      state.additionally = action.payload;
    },
  },
});
export const {changeCheck, changeAdditionally} = filterSlice.actions;
export default filterSlice.reducer;