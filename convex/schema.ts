import {defineSchema,defineTable} from "convex/server";
import {v} from "convex/values";

export default defineSchema({
    tasks: defineTable({
        text: v.string(),
        completed: v.boolean(),
    }),
    products: defineTable({
        price: v.number(),
        name: v.string(),
    })
})