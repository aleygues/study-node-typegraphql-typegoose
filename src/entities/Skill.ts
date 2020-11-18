import { prop } from "@typegoose/typegoose";
import { Length } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";

@InputType('SkillInput')
@ObjectType('SkillType')
export class Skill {
    @Field()
    @Length(3, 50)
    @prop()
    title!: string;

    @Field(() => Int)
    @prop()
    votes!: number;
}