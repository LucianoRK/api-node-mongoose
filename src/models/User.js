import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs"

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

userSchema.pre('save', async function () {
    this.password = await bcryptjs.hash(this.password, 8);
})

userSchema.methods.show = function () {
    return {
        _id: this._id,
        name: this.name,
        email: this.name,
        deleted: this.deleted
    }

}

export default model('user', userSchema);