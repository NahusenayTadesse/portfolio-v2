
import { db } from "$lib/server/db/index";
import {projects} from "$lib/server/db/schema";

export async function load(){

    const allprojects = await db.select().from(projects);

    return {
        projects: allprojects
    }

}