import api from '@/services/api';

export const createPokemon = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  method: 'post',
  url: '/pokedex/criar',
  data: form,
});

export const listPokemons = () => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
  url: '/pokedex/listar',
});

export const updatePokemon = (form) => api.request({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
  method: 'put',
  url: '/pokedex/atualizar',
  data: form,
});

export const deletePokemon = (id) => api.request({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'delete',
  url: `/pokedex/deletar/${id}`,
});
