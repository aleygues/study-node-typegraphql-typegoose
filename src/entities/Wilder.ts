import { prop } from "@typegoose/typegoose";
import { IsIn, Length } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { Skill } from "./Skill";

@ObjectType('WilderType')
@InputType('WilderInput')
export class Wilder {
    @Field({ nullable: true })
    _id!: string;

    @Field()
    @Length(3, 50)
    @prop()
    name!: string;

    @Field({ nullable: true })
    @IsIn(['Villeurbanne', 'Lyon'])
    @prop()
    city!: string;

    @Field(() => [Skill])
    @prop()
    skills!: Skill[];
}