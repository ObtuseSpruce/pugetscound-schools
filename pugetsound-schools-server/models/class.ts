import * as mongoose from 'mongoose'
import {Schema, Document} from 'mongoose'
import {IUser} from './user'
import {IAssignment} from './assignment'

export interface IClass extends Document {
    classname:  string;
    subject:    string;
    teacher:    IUser['_id'];
    students:   [IUser['_id'],string];
    assignments:IAssignment['_id'][];
}

const ClassSchema: Schema = new Schema({
    classname:  {type:String, required:true},
    subject:    {type:String, required:true},
    teacher:    {type:Number, required:true},
    students:   {
        type:[{student:Schema.Types.ObjectId, grade:String}], 
        required:true,
        minLength:2
    },
    assignments:{type:[Schema.Types.ObjectId], default:[]}
})

export default mongoose.model<IClass>('Class', ClassSchema);