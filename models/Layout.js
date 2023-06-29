import { Schema, model, models } from "mongoose";

const LayoutSchema = new Schema({
    fontFamily: {type: String},
    colorBackground: {type: String},
    backgroundColorImage: {type: String},
    backgroundColorLink : {type: String},
    backgroundPrecoNovo: {type: String},
    textColorProduct: {type: String},
    textColorPrecoAntigo: {type: String},
    textColorPrecoNovo: {type: String},
    textColorLink: {type: String},
    textColorAviso : {type: String},
    marginTopImageContainer: {type: Number},
});

export const Layout = models.Layout || model('Layout', LayoutSchema);