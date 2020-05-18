import * as mongoose from 'mongoose'
import {Schema, Document} from 'mongoose'
import {IClass} from './class'

export interface IUser extends Document {
    firstname: string;
    lastname: string;
    password: string;
    email: string;
    birthdate: Date;
    admin: boolean;
    position: string;
    grade: string;
    classes: IClass['_id'][];
}

const UserSchema:Schema = new Schema({
    firstname:  {type:String, required:true},
    lastname:   {type:String, required:true},
    password:   {type:String, required:true},
    email:      {
        type:String, 
        required:true,
        unique: true,
    },
    birthdate:  {type:Date, default:null},
    admin:      {type:Boolean, default:false},
    position:   {type:String, required:true},
    grade:      {type:String, default:'N/A'},
    classes:    {
        type: [Schema.Types.ObjectId],
        default: []
    }
})

export default mongoose.model<IUser>('User', UserSchema)