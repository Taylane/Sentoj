import {env} from '../../envs/env.js';

export class TagService {
  constructor() {
    console.log('teste');
  }
  async get(id) {
    if (id != null) {
      return await fetch(env.api + '/tags/' + id).then(res => res.json());
    }
    return await fetch(env.api + '/tags').then(res => res.json());
  }

  post(body) {
    return fetch(env.api + '/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }

  patch() {}

  delete() {}
}

export const tagService = new TagService();
