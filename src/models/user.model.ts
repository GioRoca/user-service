import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'USERS'},
  },
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'USERID',
      dataType: 'INTEGER',
      nullable: false,
    },
  })
  id?: number;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'USERNAME',
      dataType: 'VARCHAR',
      nullable: false,
    },
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'PASSWORD',
      dataType: 'VARCHAR',
      nullable: false,
    },
  })
  password: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'MNEMONIC',
      dataType: 'VARCHAR',
      nullable: false,
    },
  })
  mnemonic: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
