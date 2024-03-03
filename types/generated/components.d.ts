import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionFeatureRow extends Schema.Component {
  collectionName: 'components_section_feature_rows';
  info: {
    displayName: 'Feature Row';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.RichText;
    button: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionHeroNoImage extends Schema.Component {
  collectionName: 'components_section_hero_no_images';
  info: {
    displayName: 'Hero No Image';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    button: Attribute.String;
  };
}

export interface SectionHeroWithImage extends Schema.Component {
  collectionName: 'components_section_hero_with_images';
  info: {
    displayName: 'Hero with Image';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    button: Attribute.String;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionImageGridCopy extends Schema.Component {
  collectionName: 'components_section_cta';
  info: {
    displayName: 'CTA';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    button: Attribute.String & Attribute.Required;
  };
}

export interface SectionImageGrid extends Schema.Component {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'Image Grid';
    icon: 'folder';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.feature-row': SectionFeatureRow;
      'section.hero-no-image': SectionHeroNoImage;
      'section.hero-with-image': SectionHeroWithImage;
      'section.image-grid copy': SectionImageGridCopy;
      'section.image-grid': SectionImageGrid;
    }
  }
}
