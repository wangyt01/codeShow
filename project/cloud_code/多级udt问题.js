import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity } from '@farris/devkit';
import { DFCode3778Entity } from './dfcode3778entity';
import { DFName3778Entity } from './dfname3778entity';

export class MasterOrganization7fd6Entity extends Entity {
  @NgField({
    originalDataField: 'MasterOrganization',
    dataField: 'masterOrganization',
    primary: true,
    validRules: [
      { type: 'maxLength', constraints: [36], message: '最大长度为36' }
    ]
  })
  masterOrganization: string;

  @NgObject({
    dataField: 'masterOrganization_Code',
    originalDataField: 'Code',
    type: DFCode3778Entity
  })
  masterOrganization_Code: DFCode3778Entity;

  @NgObject({
    dataField: 'masterOrganization_Name',
    originalDataField: 'Name',
    type: DFName3778Entity
  })
  masterOrganization_Name: DFName3778Entity;

}

