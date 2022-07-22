import { components } from './schema';
import * as faker from 'faker';

export function PlaceList(): components['schemas']['PlaceList'] {
  const places = [];

  for (let i = 0; i < 50; i++) {
    places.push(PlaceInfo());
  }

  return {
    places,
  };
}

export function PlaceInfo(placeId?: string): components['schemas']['PlaceInfo'] {
  return {
    placeId: placeId ?? faker.random.word(),
    city: faker.address.city(),
    province: faker.address.county(),
    lat: faker.address.latitude(),
    lon: faker.address.longitude(),
    category: faker.random.word(),
    name: faker.company.companyName(),
    istatCode: `${faker.datatype.string(1)}${faker.datatype.number(999)}`,
    area: faker.datatype.number(10000).toString(),
  };
}
export function CategoriesList(): components['schemas']['CategoriesList'] {
  return {
    categories: [
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
      'Esposizioni Permanenti',
      'Percorsi e proposte didattiche',
      'Territorio',
    ],
  };
}
