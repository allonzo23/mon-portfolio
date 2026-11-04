import { createClient } from
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://kxppmccysskbcsnhjfog.supabase.co";

const SUPABASE_KEY = "sb_publishable_fyKVWE2MMCqq1riGYhK0fQ_LN1U0n3p";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);