import { getModelForClass } from "@typegoose/typegoose";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Wilder } from "../entities/Wilder";

@Resolver(() => Wilder)
export class WildersResolver {
    @Query(() => [Wilder])
    public async getWilders(): Promise<Wilder[]> {
        const WilderModel = getModelForClass(Wilder);
        return WilderModel.find().exec();
    }

    @Query(() => Wilder, { nullable: true })
    public async getWilder(@Arg('id') id: string): Promise<Wilder | null> {
        const WilderModel = getModelForClass(Wilder);
        return WilderModel.findById(id).exec();
    }

    @Mutation(() => Boolean)
    public async deleteWilder(@Arg('name') name: string): Promise<Boolean> {
        const WilderModel = getModelForClass(Wilder);
        await WilderModel.deleteOne({ name }).exec();
        return true;
    }

    @Mutation(() => Wilder)
    public async createWilder(@Arg('data', () => Wilder) data: Wilder): Promise<Wilder> {
        const WilderModel = getModelForClass(Wilder);
        return WilderModel.create(data);
    }
}