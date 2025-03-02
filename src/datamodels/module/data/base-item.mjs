import mist-engineDataModel from "./base-model.mjs";

export default class mist-engineItemBase extends mist-engineDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}