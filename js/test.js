import { supabase } from "./supabase.js";

const { data, error } = await supabase
    .from("messages")
    .select("id")
    .limit(1);

console.log(data, error);