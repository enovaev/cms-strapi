import type { Schema, Struct } from '@strapi/strapi';

export interface TemplatesUfc extends Struct.ComponentSchema {
  collectionName: 'components_templates_ufcs';
  info: {
    description: '';
    displayName: 'ufc-template';
    icon: 'filter';
  };
  attributes: {
    background_mob: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    background_pc: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    logo_bb_ufc: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    logo_event: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    subtitle_mob: Schema.Attribute.Text;
    subtitle_pc: Schema.Attribute.Text;
    title_mob: Schema.Attribute.Text;
    title_pc: Schema.Attribute.Text;
  };
}

export interface TemplatesWheelTemplate extends Struct.ComponentSchema {
  collectionName: 'components_templates_wheel_templates';
  info: {
    description: '';
    displayName: 'wheel-template';
  };
  attributes: {
    locales: Schema.Attribute.Blocks;
    title_pc: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'templates.ufc': TemplatesUfc;
      'templates.wheel-template': TemplatesWheelTemplate;
    }
  }
}
