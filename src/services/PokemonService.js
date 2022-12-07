import api from '@/services/api';

export const listPokemons = () => api.request({
  method: 'get',
  url: '/pokedex/listar',
});

export const criar = () => api.get('/pokedex/criar');
