import { mongoErrorHandler } from "@leapjs/common";
import { Ref, getModelForClass, index, post, prop } from "@typegoose/typegoose";
import { User } from "app/user/model/user";
import { ObjectId } from "mongodb";

@index({ "expireAt": 1 }, { expireAfterSeconds: 300 })
@post("save", mongoErrorHandler("users"))
@post("findOneAndUpdate", mongoErrorHandler("users"))
class OTP {
  @prop({ _id: true, id: ObjectId })
  public id?: ObjectId;

  @prop({})
  public otp!: number;

  @prop({})
  public number!: number;

  @prop({})
  public token!: string;

  @prop({ type: ObjectId })
  public user!: Ref<User>;
}

const OTPModel = getModelForClass(OTP, {
  schemaOptions: {
    expires:300,
    expireAfterSeconds:300,
    collection: "otp",
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
});

export { OTP, OTPModel };
