import { Schema, model} from 'mongoose';
const keyAuthSchema = new Schema({
    key: {type: String, required: true, unique: true},
    user: {type: String, required: true},
    active: {type: Boolean, default: true}
});

export const KeyAuth = model('KeyAuth', keyAuthSchema);